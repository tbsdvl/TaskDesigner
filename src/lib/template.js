const fs = require("fs");
const Task = require("../models/task");
require("dotenv").config();

const writeMarkDownPromise = (path, template) => {
  return new Promise((resolve, reject) => {
    return fs.writeFile(path, template, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
});
}

module.exports = {
  /**
   * Creates a task template
   * @param {Task} task The task.
   * @returns {string} The task template string.
   */
  createTaskTemplate: (task) => {
let template =
`
### <b>Summary:</b>
${task.summary}

### <b>Branch:</b>
<b>${task.branch}</b>
`;

for (const project in task.getProjects) {
const projectTemplate =
`

# ${task.getProjects[project].name}

### <b>${task.getProjects[project].parentDirectory}</b>

${task.getProjects[project].getDirectories.map((directory) => {
return `

## ${directory}

`
})}
`;

template += projectTemplate;
}

  return template = template.replace(",", "");
  },
  createMarkDownFile: async (id, template) => {
    let path = __dirname + process.env.MARKDOWN_PATH;

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    const filePath = `${path}${id}.md`;
    await writeMarkDownPromise(filePath, template);
    return fs.existsSync(filePath);
  }
};

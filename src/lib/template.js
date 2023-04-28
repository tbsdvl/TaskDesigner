const fs = require("fs");
const crypto = require("crypto");
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
### Summary:
${task.summary}

### Branch:
${task.branch}
`;

for (const project in task.getProjects) {
const projectTemplate = 
`

# ${task.getProjects[project].name}

${task.getProjects[project].getDirectories.map((directory) => {
return `

## ${directory.name}
`
})}
`;

template += projectTemplate.replace(',', '');
}

  return template;
  },
  createMarkDownFile: async (template, path = null) => {
    path = path ? __dirname + path : __dirname + process.env.DEFAULT_PATH;

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    // update to use a task number instead of a random uuid
    await writeMarkDownPromise(`${path}${crypto.randomUUID()}.md`, template);
  }
};

const Task = require("../models/task");
module.exports = {
  /**
   * Creates a task template
   * @param {Task} task The task.
   * @returns {string} The task template string.
   */
  createTaskTemplate: (task) => {
const projectKeys = Object.keys(task.getProjects);
let markdown = [];
let directories = [];
for (let i = 0; i < projectKeys.length; i++) {
const projectTemplate = 
`

# ${task.getProjects[projectKeys[i]].name}

`;

markdown.push(projectTemplate);
if (markdown.length === 1) {
  task.getProjects[projectKeys[i]].getDirectories[0].start = markdown.length;
} else if (markdown.length > 1) {
  task.getProjects[projectKeys[i]].getDirectories[0].start = markdown.length + task.getProjects[projectKeys[i - 1]].getDirectories.length;
}

directories = [...directories, ...task.getProjects[projectKeys[i]].getDirectories];
}

for (let i = 0; i < directories.length; i++) {
  if (directories[i].start) {
    markdown.push(markdown[markdown.length - 1]);
    markdown[directories[i].start] = directories[i].name;
  } 
  
  if (directories[i].index) {
    markdown.push(markdown[markdown.length - 1]);
    markdown[directories[i].index] = directories[i].name;
  }

  if (directories[i].start && !directories[i + 1].start) {
    directories[i + 1].index = directories[i].start + 1;
  }
}

let template = 
`
### Summary:
${task.summary}

### Branch:
${task.branch}
`;

for (const string of markdown) {
  template += string;
}

  return template;
  },
};

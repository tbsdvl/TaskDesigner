const Task = require("../models/task");
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

for (const key in task.getProjects) {
    const projectTemplate = 
`
# ${task.getProjects[key].name}
`;
    template = template.concat(projectTemplate);
}
    return template;
  },
};

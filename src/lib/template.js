// add a function to get a new template
// add a function to add a project to a template
module.exports = {
  /**
   * Creates a task template
   * @param {Task} task The task.
   */
  createTaskTemplate: (task) => {
    const template = 
`
### Summary:
${task.summary}

### Branch:
${task.branch}
`;
    return template;
  },
};

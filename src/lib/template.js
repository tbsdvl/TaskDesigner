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
# ${project}
`;
    template = template.concat(projectTemplate);
}
    return template;
  },
};

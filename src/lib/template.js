module.exports = {
  /**
   * Creates a task template
   * @param {Task} task The task.
   * @returns {string} The task template string.
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

const prompt = require("./prompt");

module.exports = {
  /**
   * Displays the prompt on app startup.
   * @returns {Promise} A resolved promise containing the answers from the start prompt.
   */
  displayStartPrompt: async () => {
    const startPrompt = await prompt.createStartPrompt();
    if (!startPrompt.start) {
      process.exit(0);
    }
  },
  /**
   * Gets the task prompt's answers.
   * @returns {Promise} A resolved promise containing the answers from the task prompt.
   */
  getTaskPromptAnswers: async () => {
    const taskPrompt = await prompt.createTaskPrompt();
    if (!taskPrompt.summary && !taskPrompt.branch) {
    }
    return taskPrompt;
  },
  /**
   * Gets the project prompt's answers.
   * @returns {Promise} A resolved promise containig the answers from the project prompt.
   */
  getProjectPromptAnswers: async () => await prompt.createProjectPrompt(),
};

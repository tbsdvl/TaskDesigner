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
  getTaskPromptAnswers: async () => await prompt.createTaskPrompt(),
  /**
   * Gets the project prompt's answers.
   * @returns {Promise} A resolved promise containing the answers from the project prompt.
   */
  getProjectPromptAnswers: async () => await prompt.createProjectPrompt(),
  /**
   * Gets the parent directory prompt's answer.
   * @returns {Promise} A resolved promise containing the answer from the parent directory prompt.
   */
  getParentDirectoryPromptAnswer: async () => await prompt.createParentDirectoryPrompt(),
  /**
   * Gets the directories prompt's answers.
   * @returns
   */
  getDirectoriesPromptAnswers: async () => await prompt.createDirectoriesPrompt(),
  /**
   * Gets the add project prompt's answer.
   * @returns {Promise} A resolved promise containing the answer from the add project prompt.
   */
  getAddProjectAnswer: async () => await prompt.createAddProjectPrompt(),
};

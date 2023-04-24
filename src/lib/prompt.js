const inquirer = require("inquirer");
const { Question, Answer } = require("../models");
module.exports = {
  /**
   * Creates a new prompt.
   * @param {Question[]} questions The list of questions.
   * @param {Answer[]} answers The list of answers.
   * @returns {Promise} A promise if the prompt is created successfully.  
   */
  createPrompt: async (questions, answers = null) => {
    return inquirer.createPromptModule()(questions, answers);
  },
};

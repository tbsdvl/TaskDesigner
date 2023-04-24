const prompt = require("../lib/prompt");
const { start, task, project } = require("../questions");

module.exports = {
  createStartPrompt: async () => await prompt.createPrompt(start),
  createTaskPrompt: async () => await prompt.createPrompt(task),
  createProjectPrompt: async () => await prompt.createPrompt(project),
};

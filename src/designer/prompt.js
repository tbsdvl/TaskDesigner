const prompt = require("../lib/prompt");
const {
  start,
  task,
  project,
  parentDirectory,
  directories,
  addProject,
} = require("../questions");

module.exports = {
  createStartPrompt: async () => await prompt.createPrompt(start),
  createTaskPrompt: async () => await prompt.createPrompt(task),
  createProjectPrompt: async () => await prompt.createPrompt(project),
  createParentDirectoryPrompt: async () => await prompt.createPrompt(parentDirectory),
  createDirectoriesPrompt: async () => await prompt.createPrompt(directories),
  createAddProjectPrompt: async () => await prompt.createPrompt(addProject),
};

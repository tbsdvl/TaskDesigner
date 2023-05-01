const startQuestions = require("./start");
const taskQuestions = require("./task");
const projectQuestions = require("./project");
const parentDirectoryQuestion = require("./parentDirectory");
const directoriesQuestions = require("./directories");
const addProjectQuestion = require("./addProject");

module.exports = {
  start: startQuestions,
  task: taskQuestions,
  project: projectQuestions,
  parentDirectory: parentDirectoryQuestion,
  directories: directoriesQuestions,
  addProject: addProjectQuestion
};

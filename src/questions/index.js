const questionType = require("../constants/questionType");
const { Question } = require("../models");
const questions = [
  new Question({
    type: questionType.input,
    name: "summary",
    message: "Enter a summary: ",
  }),
  new Question({
    type: questionType.input,
    name: "branch",
    message: "Enter the name of the branch: "
  }),
  new Question({
    type: questionType.confirm,
    name: "addProject",
    message: "Add a new project?"
  })
];

module.exports = questions;

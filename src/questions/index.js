const questionType = require("../constants/questionType");
const filter = require("../lib/filter");
const { Question, Choice } = require("../models");
const questions = [
  new Question({
    type: questionType.input,
    name: "summary",
    message: "Enter a summary: ",
  }),
  new Question({
    type: questionType.input,
    name: "branch",
    message: "Enter the name of the branch: ",
  }),
  new Question({
    type: questionType.list,
    name: "addProject",
    message: "Add a new project?",
    filter: filter.addProjectFilter,
    choices: [
      new Choice({
        name: "Yes",
        value: true
      }),
      new Choice({
        name: "No",
        value: false
      }),
    ],
  }),
];

module.exports = questions;

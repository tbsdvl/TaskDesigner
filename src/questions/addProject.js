const { Question, Choice } = require("../models");
const questionType = require("../constants/questionType");

module.exports = [
  new Question({
    type: questionType.list,
    name: "addProject",
    message: "Add a new project?",
    choices: [
      new Choice({
        name: "Yes",
        value: true,
      }),
      new Choice({
        name: "No",
        value: false,
      }),
    ],
  }),
];

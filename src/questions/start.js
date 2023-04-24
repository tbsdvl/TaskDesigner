const { Question, Choice } = require("../models");
const questionType = require("../constants/questionType");

module.exports = [
  new Question({
    type: questionType.list,
    name: "start",
    message: "Please select an option",
    choices: [
      new Choice({
        name: "Create a new task",
        value: true,
      }),
      new Choice({
        name: "Exit",
        value: false,
      }),
    ],
  }),
];

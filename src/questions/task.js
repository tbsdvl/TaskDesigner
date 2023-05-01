const { Question } = require("../models");
const questionType = require("../constants/questionType");
const validation = require("../lib/validation");

module.exports = [
  new Question({
    type: questionType.number,
    name: "id",
    message: "Enter the task id: ",
    validate: validation.validateId,
  }),
  new Question({
    type: questionType.input,
    name: "summary",
    message: "Enter a summary: ",
    validate: validation.validateInput,
  }),
  new Question({
    type: questionType.input,
    name: "branch",
    message: "Enter the name of the branch: ",
    validate: validation.validateInput,
  }),
];

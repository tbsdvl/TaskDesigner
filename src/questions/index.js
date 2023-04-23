const questionType = require("../constants/questionType.constants");
const { Question } = require("../models");
const questions = [
  new Question({
    type: questionType.input,
    name: "username",
    message: "Welcome! Enter your username: ",
  }),
];

module.exports = questions;

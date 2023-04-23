const questionType = require("./constants/questionType.constants");
const prompt = require("./lib/prompt");
const title = require("./lib/title");
const { Question } = require("./models");

title.displayTitle().then(() => {
  const questions = [
    new Question({
      type: questionType.input,
      name: "username",
      message: "Welcome! Enter your username: ",
    }),
  ];
  prompt.createPrompt(questions);
});

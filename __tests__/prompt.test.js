const inquirer = require("inquirer");
const Question = require("../src/models/question");
const Answer = require("../src/models/answer");
const Choice = require("../src/models/choice");
const questionType = require("../src/constants/questionType.constants");
describe("prompt", () => {
  it("should create a new prompt", () => {
    const prompt = inquirer.createPromptModule();
    expect(prompt).toBeTruthy();
  });

  it("should create a new prompt with questions and answers", async () => {
    const questions = [
      new Question({
        type: questionType.input,
        name: "myInput",
        choices: [
          new Choice({
            value: true,
          }),
        ],
      }),
    ];
    const answers = [
      new Answer({
        key: "myInput",
      }),
    ];
    const prompt = jest.fn().mockResolvedValue({ value: "test" });
    await expect(prompt(questions, answers)).resolves.toEqual({
      value: "test",
    });
  });
});
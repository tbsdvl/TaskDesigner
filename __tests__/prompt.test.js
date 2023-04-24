const inquirer = require("inquirer");
const Question = require("../src/models/question");
const Answer = require("../src/models/answer");
const Choice = require("../src/models/choice");
const questionType = require("../src/constants/questionType");
const { start } = require("../src/questions");
const designer = require("../src/designer");
const prompt = require("../src/designer/prompt");

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

  it("should successfully kill a process", async () => {
    const mockExit = jest.spyOn(process, "kill").mockImplementation((pid) => true);
    process.kill(process.pid);
    expect(mockExit).toHaveBeenCalledWith(process.pid);
    mockExit.mockRestore();
  });

  it("should successfully close out of the application", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation((code) => {
      console.log("process.exit: " + code);
    });
    const mockCreateStartPrompt = jest.spyOn(prompt, "createStartPrompt").mockResolvedValue({ start: false });
    expect(await designer.displayStartPrompt()).toBeUndefined();
    expect(mockCreateStartPrompt).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
    mockCreateStartPrompt.mockRestore();
    mockExit.mockRestore();
  });
});

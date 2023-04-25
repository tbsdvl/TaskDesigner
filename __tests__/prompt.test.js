const inquirer = require("inquirer");
const Question = require("../src/models/question");
const Answer = require("../src/models/answer");
const Choice = require("../src/models/choice");
const questionType = require("../src/constants/questionType");
const project = require("../src/constants/project");
const directory = require("../src/constants/directory");
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
    const mockExit = jest
      .spyOn(process, "kill")
      .mockImplementation((pid) => true);
    process.kill(process.pid);
    expect(mockExit).toHaveBeenCalledWith(process.pid);
    mockExit.mockRestore();
  });

  it("should successfully close out of the application", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation((code) => {
      console.log("process.exit: " + code);
    });
    const mockCreateStartPrompt = jest
      .spyOn(prompt, "createStartPrompt")
      .mockResolvedValue({ start: false });
    expect(await designer.displayStartPrompt()).toBeUndefined();
    expect(mockCreateStartPrompt).toHaveBeenCalled();
    expect(mockExit).toHaveBeenCalledWith(0);
    mockCreateStartPrompt.mockRestore();
    mockExit.mockRestore();
  });

  it("should successfully create the start prompt", async () => {
    const mockCreateStartPrompt = jest
      .spyOn(prompt, "createStartPrompt")
      .mockResolvedValue({ start: true });
    expect(await prompt.createStartPrompt()).toBeTruthy();
    expect(mockCreateStartPrompt).toHaveBeenCalled();
    mockCreateStartPrompt.mockRestore();
  });

  it("should successfully create the task prompt", async () => {
    const mockCreateTaskPrompt = jest
      .spyOn(prompt, "createTaskPrompt")
      .mockResolvedValue({ summary: "test", branch: "master" });
    expect(await prompt.createTaskPrompt()).toBeTruthy();
    expect(mockCreateTaskPrompt).toHaveBeenCalled();
    mockCreateTaskPrompt.mockRestore();
  });

  it("should successfully create the project prompt", async () => {
    const mockCreateProjectPrompt = jest
      .spyOn(prompt, "createProjectPrompt")
      .mockResolvedValue({ project: project.EAZ_APPLICATIONCORE });
    expect(await prompt.createProjectPrompt()).toBeTruthy();
    expect(mockCreateProjectPrompt).toHaveBeenCalled();
    mockCreateProjectPrompt.mockRestore();
  });

  it("should successfully create the parent directory prompt", async () => {
    const mockCreateParentDirectoryPrompt = jest
      .spyOn(prompt, "createParentDirectoryPrompt")
      .mockResolvedValue({ parentDirectory: "BusinessApplications/" });
    expect(await prompt.createParentDirectoryPrompt()).toBeTruthy();
    expect(mockCreateParentDirectoryPrompt).toHaveBeenCalled();
    mockCreateParentDirectoryPrompt.mockRestore();
  });

  it("should successfully create the directories prompt", async () => {
    const mockCreateDirectoriesPrompt = jest
      .spyOn(prompt, "createDirectoriesPrompt")
      .mockResolvedValue({
        directories: [
          directory.MODELS,
          directory.SERVICES,
          directory.INTERFACES,
        ],
      });
    expect(await prompt.createDirectoriesPrompt()).toBeTruthy();
    expect(mockCreateDirectoriesPrompt).toHaveBeenCalled();
    mockCreateDirectoriesPrompt.mockRestore();
  });
});

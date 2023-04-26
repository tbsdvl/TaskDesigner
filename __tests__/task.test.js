const task = require("../src/lib/task");
const project = require("../src/constants/project");
const directory = require("../src/lib/directory");
const directoryNames = require("../src/constants/directory");

describe("task", () => {
  it("should successfully add the project to the task", () => {
    const newTask = task.createTask({
      summary: "test",
      branch: "master",
    });
    newTask.addProject({ name: project.EAZ_APPLICATIONCORE });
    expect(newTask.getProjects[project.EAZ_APPLICATIONCORE]).toBeTruthy();
  });

  it("should fail to add an existing project to the task", () => {
    const newTask = task.createTask({
      summary: "test",
      branch: "master",
    });
    newTask.addProject({ name: project.EAZ_APPLICATIONCORE });
    expect(newTask.addProject({ name: project.EAZ_APPLICATIONCORE })).toBeUndefined();
  });

  it("should successfully create a task with a project and its directories", () => {
    const newTask = task.createTask({
      summary: "test",
      branch: "master",
    }); 
    newTask.addProject({ name: project.EAZ_APPLICATIONCORE });
    expect(newTask.getProjects[project.EAZ_APPLICATIONCORE]).toBeTruthy();
    newTask.getProjects[project.EAZ_APPLICATIONCORE].addDirectories([directory.createDirectory({ name: directoryNames.MODELS })]);
    expect(newTask.getProjects[project.EAZ_APPLICATIONCORE].getDirectories.length).toBe(1);
  });
});

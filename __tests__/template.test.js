const task = require("../src/lib/task");
const template = require("../src/lib/template");
const projectNames = require("../src/constants/project");
const project = require("../src/lib/project");
const directory = require("../src/lib/directory");
const directoryNames = require("../src/constants/directory");

describe("template", () => {
  it("should return a task template with a summary, branch, and projects", () => {
    const newTask = task.createTask({
      summary: "Test",
      branch: "master",
    });

    newTask.addProject(project.createProject({ name: projectNames.EAZ_APPLICATIONCORE }));
    newTask.addProject(project.createProject({ name: projectNames.EAZ_INFRASTRUCTURE }));
    const taskTemplate = template.createTaskTemplate(newTask);
    expect(taskTemplate.includes(newTask.summary)).toBeTruthy();
    expect(taskTemplate.includes(newTask.branch)).toBeTruthy();
    expect(taskTemplate.includes(newTask.projects[projectNames.EAZ_APPLICATIONCORE].name)).toBeTruthy();
  });

  it("should return a task template with a summary, branch, a project, and its directories", () => {
    const newTask = task.createTask({
      summary: "Test",
      branch: "master",
    });

    newTask.addProject(project.createProject({ name: projectNames.EAZ_APPLICATIONCORE }));
    newTask.getProjects[projectNames.EAZ_APPLICATIONCORE].addDirectories([directory.createDirectory({ name: directoryNames.MODELS })]);
    const taskTemplate = template.createTaskTemplate(newTask);
    expect(taskTemplate.includes(newTask.summary)).toBeTruthy();
    expect(taskTemplate.includes(newTask.branch)).toBeTruthy();
    expect(taskTemplate.includes(newTask.projects[projectNames.EAZ_APPLICATIONCORE].name)).toBeTruthy();
  });
});

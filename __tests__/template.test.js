const task = require("../src/lib/task");
const template = require("../src/lib/template");
const project = require("../src/constants/project");

describe("template", () => {
  it("should return a task template with a summary, branch, and projects", () => {
    const newTask = task.createTask({
      summary: "Test",
      branch: "master",
    });

    newTask.addProject(project.EAZ_APPLICATIONCORE);
    newTask.addProject(project.EAZ_INFRASTRUCTURE);
    const taskTemplate = template.createTaskTemplate(newTask);
    expect(taskTemplate.includes(newTask.summary)).toBeTruthy();
    expect(taskTemplate.includes(newTask.branch)).toBeTruthy();
    expect(taskTemplate.includes(newTask.projects["EAZ.ApplicationCore"])).toBeTruthy();
  });
});

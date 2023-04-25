const task = require("../src/lib/task");
const template = require("../src/lib/template");

describe("template", () => {
  it("should return a task template with a summary and branch", () => {
    const newTask = task.createTask({
        summary: "Test",
        branch: "master"
    });
    const taskTemplate = template.createTaskTemplate(newTask);
    expect(taskTemplate.includes(newTask.summary)).toBeTruthy();
    expect(taskTemplate.includes(newTask.branch)).toBeTruthy();
  });
});

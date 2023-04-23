const project = require("../src/constants/project");
const filter = require("../src/lib/filter");
const task = require("../src/lib/task");
const errorMessage = require("../src/constants/errorMessage");
describe("filter", () => {
  it("should successfully filter the addProject input", () => {
    expect(filter.filterAddProject(true)).toBeTruthy();
  });

  it("should successfully exit the application", () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => filter.filterAddProject(false)).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  it("should return an error message saying the project already exists", () => {
    const myTask = task.createTask();
    myTask.addProject(project.EAZ_APPLICATIONCORE);
    expect(filter.filterProject(project.EAZ_APPLICATIONCORE, myTask)).toBe(
      errorMessage.projectExists
    );
  });

  it("should successfully add the project to the task", () => {
    const myTask = task.createTask();
    expect(
      filter.filterProject(project.EAZ_APPLICATIONCORE_TESTS, myTask)
    ).toBeUndefined();
  });
});

const validation = require("../src/lib/validation");
describe("validation", () => {
  it("should successfully validate the addProject input", () => {
    expect(validation.addProjectValidator(true)).toBeTruthy();
  });

  it("should successfully return an error message for an invalid choice", () => {
    expect(validation.addProjectValidator("this ain't right")).toBeTruthy();
  });

  it("should successfully exit the application", () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => validation.addProjectValidator(false)).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});

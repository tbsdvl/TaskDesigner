const filter = require("../src/lib/filter");
describe("filter", () => {
  it("should successfully filter the addProject input", () => {
    expect(filter.addProjectFilter(true)).toBeTruthy();
  });

  it("should successfully exit the application", () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error("process.exit: " + number);
      });
    expect(() => filter.addProjectFilter(false)).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});

const validation = require("../src/lib/validation");
const errorMessage = require("../src/constants/errorMessage");

describe("validation", () => {
  it("should return an invalid input error message given an empty string", () => {
    expect(validation.validateInput("")).toBe(errorMessage.invalidInput);
  });

  it("should return an invalid input error message given whitespace", () => {
    expect(validation.validateInput("                      ")).toBe(
      errorMessage.invalidInput
    );
  });

  it("should return true for valid input", () => {
    const result = validation.validateInput("this should not fail");
    expect(result).not.toBe(errorMessage.invalidInput);
    expect(result).toBeTruthy();
  });
});

const errorMessage = require('../src/constants/errorMessage');
describe("errorMessage", () => {
    it("should successfully format an invalid choice error message", () => {
        expect(errorMessage.invalidChoice).toBe("Invalid choice. Please input a valid choice. ex. Y/n");
    });
});
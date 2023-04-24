const errorMessage = require("../constants/errorMessage");
module.exports = {
  /**
   * Validates text input.
   * @param {string} input The input
   */
  validateInput: (input) => {
    if (!input || input.trim().length === 0 || typeof input !== "string") {
      return errorMessage.invalidInput;
    }

    return true;
  },
};

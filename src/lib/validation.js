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
  /**
   * Validates an id.
   * @param {number} id The id.
   */
  validateId: (id) => {
    if (id === 0 || typeof id !== "number" || id === NaN) {
      return errorMessage.invalidId;
    }

    return true;
  }
};

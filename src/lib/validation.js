const errorMessage = require('../constants/errorMessage');
module.exports = {
    /**
     * Validates the addProject question's input.
     * @param {boolean} input The input.
     * @returns {boolean | string} True if input is yes, false if input is no. Otherwise returns an error message.
     */
    addProjectValidator: (input) => {
        if (input && typeof input === "boolean") {
            return input;
        } else if (!input && typeof input === "boolean") {
            console.log("Goodbye!");
            process.exit(1);
        }
        return errorMessage.invalidChoice;
    }
}
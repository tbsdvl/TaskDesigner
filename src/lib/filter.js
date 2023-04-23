module.exports = {
    /**
     * Filters the addProject question's input.
     * @param {boolean} input The input.
     * @returns {boolean | string} True if input is yes, exits the app if false.
     */
    addProjectFilter: (input) => {
        if (input && typeof input === "boolean") {
            return input;
        } else if (!input && typeof input === "boolean") {
            console.log("Goodbye!");
            process.exit(1);
        }
    }
}
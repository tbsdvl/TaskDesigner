const Task = require("../models/task");

module.exports = {
  /**
   * Creates a new task.
   * @returns {Task} A task.
   */
  createTask: () => {
    return new Task();
  },
};

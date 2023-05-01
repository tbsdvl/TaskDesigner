const Task = require("../models/task");

module.exports = {
  /**
   * Creates a new task.
   * @param {object} task The task.
   * @returns {Task} A task.
   */
  createTask: (task) => {
    return new Task(task);
  },
};

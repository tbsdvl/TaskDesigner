const Task = require("../models/task");
const errorMessage = require("../constants/errorMessage");

module.exports = {
  /**
   * Filters the addProject question's input.
   * @param {boolean} input The input.
   * @returns {boolean | void} True if input is yes, exits the app if false.
   */
  filterAddProject: (input) => {
    if (input && typeof input === "boolean") {
      return input;
    } else if (!input && typeof input === "boolean") {
      console.log("Goodbye!");
      process.exit(1);
    }
  },
  /**
   * Filters the selected project by checking if it exists in the task's projects.
   * @param {string} project The selected project.
   * @param {Task} task The task.
   */
  filterProject: (project, task) => {
    if (task.projects && task.projects[project]) {
      return errorMessage.projectExists;
    } else if (task.projects) {
      task.projects[project] = project;
    }

    task.projects = {
      [project]: project,
    };
  },
};

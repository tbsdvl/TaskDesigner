const Project = require("../models/project");

module.exports = {
  /**
   * Creates a new Project.
   * @param {object} project The project.
   * @returns {Project} A project.
   */
  createProject: (project) => {
    return new Project(project);
  },
};

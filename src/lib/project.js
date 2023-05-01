const { Project } = require("../models");

module.exports = {
  /**
   * Creates a new Project.
   * @param {object} project The project.
   * @returns {Project} A project.
   */
  createProject: (project) => new Project(project),
};

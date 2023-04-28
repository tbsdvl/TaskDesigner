const Project = require("./project");
const project = require("../lib/project");

/**
 * Represents a task
 * @class
 * @constructor
 * @public
 */
class Task {
  /**
   * Initializes a new task.
   */
  constructor(task) {
    /**
     * The id.
     * @type {string}
     * @public
     */
    this.id = task.id;
    
    /**
     * The summary.
     * @type {string}
     * @public
     */
    this.summary = task.summary;

    /**
     * The branch.
     * @type {string}
     * @public
     */
    this.branch = task.branch;

    /**
     * The projects.
     * @type {object.<Project>}
     * @public
     */
    this.projects = {};
  }

  /**
   * Gets the projects.
   * @returns {object.<Project>} The projects.
   * @public
   */
  get getProjects() {
    return this.projects;
  }

  /**
   * Adds a project.
   * @param {Project} newProject The project.
   * @returns {void}
   * @public
   */
  addProject(newProject) {
    if (this.getProjects[newProject.name]) {
      return;
    }
    this.getProjects[newProject.name] = project.createProject(newProject);
  }
}

module.exports = Task;

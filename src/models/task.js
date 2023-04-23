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
  constructor() {
    /**
     * The projects.
     * @type {object}
     * @public
     */
    this.projects = {};
  }

  /**
   * Gets the task's projects.
   * @returns {object} The task's projects.
   * @public
   */
  get getProjects() {
    return this.projects;
  }

  /**
   * Adds a project.
   * @param {string} project The project.
   * @returns {void}
   * @public
   */
  addProject(project) {
    this.getProjects[project] = project;
  }
}

module.exports = Task;

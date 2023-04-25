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
     * @type {object}
     * @public
     */
    this.projects = {};
  }

  /**
   * Gets the projects.
   * @returns {object} The projects.
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
    if (this.getProjects[project.name]) {
      return;
    }
    this.getProjects[project.name] = project;
  }
}

module.exports = Task;

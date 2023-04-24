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
    if (this.getProjects[project]) {
      return;
    }
    this.getProjects[project] = project;
  }
}

module.exports = Task;

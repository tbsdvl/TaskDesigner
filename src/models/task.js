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

    /**
     * The parent directory.
     * @type {string}
     * @public
     */
    this.parentDirectory;

    /**
     * The directories.
     * @type {String[]}
     * @public
     */
    this.directories = [];
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
   * Gets the directories.
   * @returns {String[]} The directories.
   * @public
   */
  get getDirectories() {
    return this.directories;
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

  /**
   * Adds a list of directories.
   * @param {String[]} project The list of directories.
   * @returns {void}
   * @public
   */
  addDirectories(directories) {
    // Update to filter out duplicates
    this.directories = directories;
  }
}

module.exports = Task;

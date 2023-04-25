/**
 * Represents a project.
 * @class
 * @constructor
 * @public
 */
class Project {
  /**
   * Initializes a new project.
   * @param {object} project
   */
  constructor(project) {
    /**
     * The name.
     * @type {string}
     * @public
     */
    this.name = project.name;

    /**
     * The parent directory.
     * @type {string}
     * @public
     */
    this.parentDirectory;

    /**
     * The list of directories.
     * @type {String[]}
     * @public
     */
    this.directories = [];
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

module.exports = Project;
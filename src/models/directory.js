/**
 * Represents a directory.
 * @class
 * @constructor
 * @public
 */
class Directory {
  /**
   * Initializes a new directory.
   * @param {object} directory
   */
  constructor(directory) {
    /**
     * The name.
     * @type {string}
     * @public
     */
    this.name = directory.name;
  }
}

module.exports = Directory;

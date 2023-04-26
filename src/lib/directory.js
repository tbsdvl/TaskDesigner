const { Directory } = require("../models");

module.exports = {
  /**
   * Creates a new Directory.
   * @param {object} directory The directory.
   * @returns {Directory} A directory.
   */
  createDirectory: (directory) => new Directory(directory),
};

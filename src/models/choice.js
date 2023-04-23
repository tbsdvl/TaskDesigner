/**
 * Represents a choice.
 * @class
 * @constructor
 * @public
 */
class Choice {
  /**
   * Initializes a new Choice.
   * @param {object} choice - The choice.
   */
  constructor(choice) {
    /**
     * The name.
     * @type {string}
     * @public
     */
    this.name = choice.name;

    /**
     * The value.
     * @type {number | string | object}
     * @public
     */
    this.value = choice.value;

    /**
     * The short.
     */
    this.short = choice.short;
  }
}

module.exports = Choice;

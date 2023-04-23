/**
 * Represents a choice.
 * @class
 * @constructor
 * @public
 */
class Choice {
  /**
   *
   * @param {object} choice - The choice.
   */
  constructor(choice) {
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

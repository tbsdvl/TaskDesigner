/**
 * Represents an answer.
 * @class
 * @constructor
 * @public
 */
class Answer {
  /**
   * Initializes a new Answer.
   * @param {object} - The answer.
   */
  constructor(answer) {
    /**
     * The key.
     * @type {string}
     * @public
     */
    this.key = answer.key;

    /**
     * The value.
     * @type {boolean | string | number}
     * 
     */
    this.value = answer.value;
  }
}

module.exports = Answer;

/**
 * Represents a question.
 * @class
 * @constructor
 * @public
 */
class Question {
  /**
   * Initializes a new Question.
   * @param {object} question - The question.
   */
  constructor(question) {
    /**
     * The type.
     * @type {string}
     * @public
     */
    this.type = question.type;

    /**
     * The name.
     * @type {string}
     * @public
     */
    this.name = question.name;

    /**
     * The message.
     * @type {string | Function}
     * @public
     */
    this.message = question.message;

    /**
     * The default value.
     * @type {string | number | boolean | Array | Function}
     * @public
     */
    this.default = question.default;

    /**
     * The list of choices.
     * @type {Choice[] | Function}
     * @public
     */
    this.choices = question.choices;

    /**
     * The validation function.
     * @type {Function}
     * @public
     */
    this.validate = question.validate;

    /**
     * The filter function.
     * @type {Function}
     * @public
     */
    this.filter = question.filter;
  }
}

module.exports = Question;

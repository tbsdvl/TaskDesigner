const questionType = require("../constants/questionType");
const validation = require("../lib/validation");
const { Question } = require("../models");

module.exports = [
    new Question({
        name: "parentDirectory",
        type: questionType.input,
        validate: validation.validateInput
    }),
];
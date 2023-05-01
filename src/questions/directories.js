const { Question, Choice } = require("../models");
const directory = require("../constants/directory");

module.exports = [
  new Question({
    name: "directories",
    type: "checkbox",
    choices: [
      new Choice({
        name: directory.MODELS,
        value: directory.MODELS,
      }),
      new Choice({
        name: directory.INTERFACES,
        value: directory.INTERFACES,
      }),
      new Choice({
        name: directory.SERVICES,
        value: directory.SERVICES,
      }),
      new Choice({
        name: directory.COMPONENTS,
        value: directory.COMPONENTS,
      }),
    ],
  }),
];

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
      new Choice({
        name: directory.MIGRATIONS,
        value: directory.MIGRATIONS,
      }),
      new Choice({
        name: directory.REPOSITORIES,
        value: directory.REPOSITORIES,
      }),
      new Choice({
        name: directory.AUTOMAPPER,
        value: directory.AUTOMAPPER,
      }),
      new Choice({
        name: directory.RESOURCES,
        value: directory.RESOURCES,
      }),
      new Choice({
        name: directory.CONTROLLERS,
        value: directory.CONTROLLERS,
      }),
      new Choice({
        name: directory.INTERFACES,
        value: directory.INTERFACES,
      }),
      new Choice({
        name: directory.MOCKS,
        value: directory.MOCKS,
      }),
      new Choice({
        name: directory.INTEGRATIONS,
        value: directory.INTEGRATIONS,
      }),
    ],
  }),
];

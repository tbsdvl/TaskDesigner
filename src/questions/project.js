const { Question, Choice } = require("../models");
const questionType = require("../constants/questionType");
const project = require("../constants/project");

module.exports = [
  new Question({
    type: questionType.list,
    name: "project",
    message: "Select a project: ",
    choices: [
      new Choice({
        name: project.EAZ_APPLICATIONCORE,
        value: project.EAZ_APPLICATIONCORE,
      }),
      new Choice({
        name: project.EAZ_CORE,
        value: project.EAZ_CORE,
      }),
      new Choice({
        name: project.EAZ_INFRASTRUCTURE,
        value: project.EAZ_INFRASTRUCTURE,
      }),
      new Choice({
        name: project.EAZ_INFRASTRUCTURE_LOGGING,
        value: project.EAZ_INFRASTRUCTURE_LOGGING,
      }),
      new Choice({
        name: project.EAZ_INFRASTRUCTURE_SECURITY,
        value: project.EAZ_INFRASTRUCTURE_SECURITY,
      }),
      new Choice({
        name: project.EAZ_WEB,
        value: project.EAZ_WEB,
      }),
      new Choice({
        name: project.EAZ_WEB_API,
        value: project.EAZ_WEB_API,
      }),
      new Choice({
        name: project.EAZ_APPLICATIONCORE_TESTS,
        value: project.EAZ_APPLICATIONCORE_TESTS,
      }),
      new Choice({
        name: project.EAZ_INTEGRATION_TESTS,
        value: project.EAZ_INTEGRATION_TESTS,
      }),
      new Choice({
        name: project.EAZ_TESTS_SHARED,
        value: project.EAZ_TESTS_SHARED,
      }),
      new Choice({
        name: project.EAZ_UTILITIES_RAZORTEMPLATEGENERATOR,
        value: project.EAZ_UTILITIES_RAZORTEMPLATEGENERATOR,
      }),
    ],
  }),
];

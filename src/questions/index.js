const { Question, Choice } = require("../models");
const questionType = require("../constants/questionType");
const project = require("../constants/project");
const filter = require("../lib/filter");
const questions = [
  new Question({
    type: questionType.input,
    name: "summary",
    message: "Enter a summary: ",
  }),
  new Question({
    type: questionType.input,
    name: "branch",
    message: "Enter the name of the branch: ",
  }),
  new Question({
    type: questionType.list,
    name: "addProject",
    message: "Add a new project?",
    filter: filter.filterAddProject,
    choices: [
      new Choice({
        name: "Yes",
        value: true,
      }),
      new Choice({
        name: "No",
        value: false,
      }),
    ],
  }),
  new Question({
    type: questionType.list,
    name: "projects",
    message: "Select a project: ",
    filter: filter.filterProject,
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

module.exports = questions;

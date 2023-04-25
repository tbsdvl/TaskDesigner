const title = require("./lib/title");
const designer = require("./designer");
const task = require("./lib/task");
const { Project } = require("../src/models");

/**
 * Starts up Work Designer.
 */
const app = async () => {
  await title.display();
  await designer.displayStartPrompt();

  const taskPromptAnswers = await designer.getTaskPromptAnswers();
  const newTask = task.createTask({
    summary: taskPromptAnswers.summary,
    branch: taskPromptAnswers.branch,
  });

  while (true) {
    const projectPromptAnswer = await designer.getProjectPromptAnswer();
    if (newTask.getProjects[projectPromptAnswer.project]) {
      console.log("Project already exists in the task.");
      // add handling to allow users to overwrite the project in the task
      // or continue to add a new task
      // overwrite project prompt
    } else {
      // use a library to init project
      newTask.addProject(new Project({
        name: projectPromptAnswer.project
      }));
    }

    const parentDirectoryPromptAnswer = await designer.getParentDirectoryPromptAnswer();
    newTask.getProjects[projectPromptAnswer.project].parentDirectory = parentDirectoryPromptAnswer.parentDirectory;
    
    const directoriesPromptAnswers = await designer.getDirectoriesPromptAnswers();
    if (directoriesPromptAnswers.directories.length > 0) {
      newTask.getProjects[projectPromptAnswer.project].addDirectories(directoriesPromptAnswers.directories);
    }

    const addProjectPromptAnswer = await designer.getAddProjectAnswer();
    if (addProjectPromptAnswer.addProject) {
      continue;
    }
    break;
  }
};

app();

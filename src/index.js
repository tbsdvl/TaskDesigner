const title = require("./lib/title");
const designer = require("./designer");
const task = require("./lib/task");

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
    const projectPromptAnswers = await designer.getProjectPromptAnswers();
    if (newTask.projects[projectPromptAnswers.project]) {
      console.log("Project already exists in the task.");
      // add handling to allow users to overwrite the project in the task
      // or continue to add a new task
      // overwrite project prompt
    } else {
      newTask.addProject(projectPromptAnswers.project);
    }

    const parentDirectoryPromptAnswer = await designer.getParentDirectoryPromptAnswer();
    newTask.parentDirectory = parentDirectoryPromptAnswer.parentDirectory;
    
    const directoriesPromptAnswers = await designer.getDirectoriesPromptAnswers();
    if (directoriesPromptAnswers.directories.length > 0) {
      newTask.addDirectories(directoriesPromptAnswers.directories);
    }

    const addProjectPromptAnswer = await designer.getAddProjectAnswer();
    if (addProjectPromptAnswer.addProject) {
      continue;
    }
    break;
  }
};

app();

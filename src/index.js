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

  // create a while condition that checks to whether or not
  // to exit the loop
  while (true) {
    const projectPromptAnswers = await designer.getProjectPromptAnswers();
    if (newTask.projects[projectPromptAnswers.project]) {
      // log an error message
      console.log("Project already exists in the task.");
      // add handling to allow users to overwrite the project in the task
      // or continue to add a new task
    } else {
      newTask.addProject(projectPromptAnswers.project);
    }

    if (projectPromptAnswers.addProject) {
      continue;
    } else {
      break;
    }
  }

  console.log('Here');
};

app();

const title = require("./lib/title");
const designer = require("./designer");
const task = require("./lib/task");
const project = require("./lib/project");
const template = require("./lib/template");

/**
 * Starts up Task Designer.
 */
const app = async () => {
  while (true) {
    await title.display();
    await designer.displayStartPrompt();

    const taskPromptAnswers = await designer.getTaskPromptAnswers();
    const newTask = task.createTask({
      id: taskPromptAnswers.id,
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
        newTask.addProject(project.createProject({ name: projectPromptAnswer.project }));
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

    // generate the markdown
    const generateMarkDownResult = await template.createMarkDownFile(newTask.id, template.createTaskTemplate(newTask));
    if (generateMarkDownResult) {
      console.log(`Successfully generated markdown for task ${newTask.id}.`);
    } else {
      console.log(`An error occurred while generating markdown for task ${newTask.id}`);
    }
  }
};

app();

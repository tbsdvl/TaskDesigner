const title = require("./lib/title");
const prompt = require("./lib/prompt");
const questions = require('./questions');

/**
 * Starts up Work Designer.
 */
const app = () => {
  title.display().then(() => {
    prompt.createPrompt(questions);
  });
};

app();

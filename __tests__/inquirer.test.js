const inquirer = require('inquirer');
const Question = require('../src/models/question');
describe("inquirer", () => {

    it('should create a new prompt', () => {
        const prompt = inquirer.createPromptModule();
        expect(prompt).not.toBeNull();
        expect(prompt).not.toBeUndefined();
    });

    it('should create a new prompt with questions and answers', () => {
        // setup the list of questions
        const questions = [
            new Question({
            }),
        ];
        // setup the list of answers
        // init a new prompt with an array of questions and answers
        // expect prompt to not be null or undefined
    });
});


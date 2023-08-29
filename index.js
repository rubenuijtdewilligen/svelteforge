import inquirer from "inquirer";
import { create } from "create-svelte";

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's your project's name?",
  },
  {
    type: "list",
    name: "types",
    message: "Do you want to add type checking with TypeScript?",
    choices: [
      { name: "Yes, using TypeScript syntax", value: "typescript" },
      { name: "Yes, using JavaScript with JSDoc comments", value: "checkjs" },
      { name: "No", value: null },
    ],
  },
  {
    type: "confirm",
    name: "prettier",
    message: "Do you want to add Prettier for code formatting?",
    default: true,
    transformer: (answer) => (answer ? "👍" : "👎"),
  },
  {
    type: "confirm",
    name: "eslint",
    message: "Do you want to add ESLint for code linting?",
    default: true,
    transformer: (answer) => (answer ? "👍" : "👎"),
  },
  {
    type: "confirm",
    name: "playwright",
    message: "Do you want to add Playwright for browser testing?",
    default: true,
    transformer: (answer) => (answer ? "👍" : "👎"),
  },
  {
    type: "confirm",
    name: "vitest",
    message: "Do you want to add Vitest for unit testing?",
    default: true,
    transformer: (answer) => (answer ? "👍" : "👎"),
  },
];

inquirer.prompt(questions).then(async (answers) => {
  console.log(JSON.stringify(answers, null, "  "));

  await create(answers.name, {
    name: answers.name,
    template: "skeleton",
    types: answers.types,
    prettier: answers.prettier === "👍" ? true : false,
    eslint: answers.eslint === "👍" ? true : false,
    playwright: answers.playwright === "👍" ? true : false,
    vitest: answers.vitest === "👍" ? true : false,
  });
});

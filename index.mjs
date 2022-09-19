import inquirer from "inquirer";
import { AppConfig } from "./lib/config.mjs";
import DeployScript from "./lib/script.mjs";

console.log("\n");
console.log("AppConfig: ");
console.log(AppConfig);
console.log("\n");

let app = null;

inquirer
  .prompt([
    {
      type: "list",
      name: "app",
      message: "Choose App to deploy:",
      choices: AppConfig.map((app) => app.name),
    },
    {
      type: "list",
      name: "env",
      message: "deploy To",
      choices: ["Main", "Test"],
    },
  ])
  .then((answers) => {
    app = AppConfig.filter((app) => app.name === answers.app)[0];
    app.env = answers.env;
    return inquirer.prompt([
      {
        type: "confirm",
        name: "deployConfirm",
        message: `Deploy ${app.name} to env ${answers.env} at port ${app.port} for sure?`,
      },
    ]);
  })
  .then((confirm) => {
    if (confirm.deployConfirm) {
      DeployScript({
        ...app,
        name: app.name.toLowerCase(),
        env: app.env.toLowerCase(),
      });
    }
  });

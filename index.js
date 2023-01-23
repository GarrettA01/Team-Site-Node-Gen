const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generateCards = require("./src/createHTML");

const myTeam = [];

// this function initializes the program by asking for team name, then jumping to the addManager function
function startProgram() {
  inquirer
    .prompt([
      {
        type: "input",
        message:
          "To generate your team's website, begin by entering your Program Name",
        name: "programName",
      },
    ])
    .then((response) => {
      const nameObj = response.programName;
      myTeam.push(nameObj);
      addManager();
    });
}

// function prompts manager info, adds to array, and prompts additional team members
function addManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your program manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your program manager's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your program manager's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your program manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );
      myTeam.push(manager);
      addTeamMember();
    });
}

function addTeamMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Would you like to add an additional team member?",
        choices: ["Add Engineer", "Add Intern", "No thank you."],
        name: "teamAdd",
      },
    ])
    .then((response) => {
      switch (response.teamAdd) {
        case "Add Engineer":
          addEngineer();
          break;

        case "Add Intern":
          addIntern();
          break;

        case "No thank you.":
          finishedTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your Engineer's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Engineer's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your Engineer's Github username?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );
      myTeam.push(engineer);
      addTeamMember();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your Intern's email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your Intern's employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What school does your Intern attend?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );
      myTeam.push(intern);
      addTeamMember();
    });
}

function finishedTeam() {
  console.log(
    "Your team's website has been generated. You can access it in the dist folder."
  );
  fs.writeFile(`./dist/${myTeam[0]}.html`, generateSite(myTeam));
}

startProgram();

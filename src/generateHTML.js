const employee = require("../lib/employee");
const engineer = require("../lib/engineer");
const intern = require("../lib/intern");
const manager = require("../lib/manager");

function generateCards(site) {
  // generates cards based on methods created in role script files
  const managerCard = (manager) => {
    return `<div class="card bg-light mx-3 my-3 shadow p-3 mb-5 rounded" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-light">
                        <h3>${manager.getName()}</h2>
                        <h5><i class="fa-solid fa-briefcase"></i> Manager</h5>
                    </div>
                        <div class="card-body text-dark">
                            <ul class="justify-item-center">
                                <li class="list-group-item">${manager.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                            </ul>
                        </div>
                    </div>`;
  };

  const engineerCard = (engineer) => {
    return `<div class="card bg-light mx-3 my-3 shadow p-3 mb-5 rounded" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-light">
                        <h3>${engineer.getName()}</h2>
                        <h5><i class="fa-solid fa-screwdriver-wrench"></i> Engineer</h5>
                    </div>
                        <div class="card-body text-dark">
                            <ul class="justify-item-center">
                                <li class="list-group-item">${engineer.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                <li class="list-group-item">Github: <a href="http://www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                            </ul>
                        </div>
                    </div>`;
  };

  const internCard = (intern) => {
    return `<div class="card bg-light mx-3 my-3 shadow p-3 mb-5 rounded" style="max-width: 18rem;">
                    <div class="card-header bg-primary text-light">
                        <h3>${intern.getName()}</h2>
                        <h5><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
                    </div>
                        <div class="card-body text-dark">
                            <ul class="justify-item-center">
                                <li class="list-group-item">${intern.getId()}</li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                                <li class="list-group-item">School: ${intern.getSchool()}</li>
                            </ul>
                        </div>
                    </div>`;
  };

  const generateHtml = [];

  // filters employee roles to create array with chosen role
  generateHtml.push(
    site
      .filter((employee) => {
        return employee.role === "Manager";
      })
      .map((manager) => managerCard(manager))
  );

  // joins the html elements in the array into a string
  generateHtml.push(
    site
      .filter((employee) => {
        return employee.role === "Engineer";
      })
      .map((engineer) => engineerCard(engineer))
      .join("")
  );

  generateHtml.push(
    site
      .filter((employee) => {
        return employee.role === "Intern";
      })
      .map((intern) => internCard(intern))
      .join("")
  );

  // joins all the elements in the generateHtml
  return generateHtml.join("");
}

// function builds the html and inserts the generated cards

module.exports = (site) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <script src="https://kit.fontawesome.com/a66e30c900.js" crossorigin="anonymous"></script>
        <title>${site[0]}</title>
    </head>
    <body>
        <header class="container-fluid bg-danger text-center py-4">
            <h1 class="text-light">The ${site[0]} Team!</h1>
        </header>
        <main class="container">
            <div class="row">
            ${generateCards(site)}
            </div>    
        </main>
    </body>
    </html>`;
};

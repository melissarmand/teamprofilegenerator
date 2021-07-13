const template = require("@babel/core");


function render(teamMembers) {
    console.log(teamMembers);
    console.log(teamMembers[0].name);
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          </head>

          <body>
    
            <div class="jumbotron text-center">
              <h1>Meet the Team!</h1>
              <p>Please read the descriptions below to learn more about each team member.</p> 
            </div>
              
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <h3>${teamMembers[0].name}</h3>
                  <p>Manager</p>
                  <p>ID: ${teamMembers[0].id}</p>
                  <p>Email: ${teamMembers[0].email}</p>
                  <p>Office Number: ${teamMembers[0].officeNumber}</p>
                </div>
                <div class="col-sm-4">
                  <h3>${teamMembers[1].name}</h3>
                  <p>Engineer</p>
                  <p>ID: ${teamMembers[1].id}</p>
                  <p>Email: ${teamMembers[1].email}</p>
                  <a href="${teamMembers[1].github}">Link to my GitHub</a>
                </div>
                <div class="col-sm-4">
                  <h3>${teamMembers[2].name}</h3>        
                  <p>Intern</p>
                  <p>ID: ${teamMembers[2].id}</p>
                  <p>Email: ${teamMembers[2].email}</p>
                  <p>School: ${teamMembers[2].school}</p>
                </div>
              </div>
            </div>
    
    
    
    
    <script src = "../src/page-template.js"></script>
    </html>
          
         `;
}

module.exports = render;
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    // TODO: search by name
    break;
    case 'no':
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  var firstName = promptFor("What is the person's first name?", chars);
  var lastName = promptFor("What is the person's last name?", chars);

  // TODO: find the person using the name they entered

}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
function getInputs () {
  var put1 = document.getElementById("name");
    var z1 = put1.options[put1.selectedIndex].value;
  var put2 = document.getElementById("lastName");
    var z2 = put2.options[put2.selectedIndex].value;
  var put3 = document.getElementById("firstName");
    var z3 = put3.options[put3.selectedIndex].value;
  var put4 = document.getElementById("eyeColor");
    var z4 = put4.options[put4.selectedIndex].value;
  var put5 = document.getElementById("gender");
    var z5 = put5.options[put5.selectedIndex].value;
  var put6 = document.getElementById("occupation");
    var z6 = put6.options[put6.selectedIndex].value;
  var arrZ = [z1, z2, z3, z4, z5, z6];
  console.log(arrZ);
  return arrZ;
}


function appName(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the name of the person you are looking for? Please enter 'yes' or 'no'", choice[0]);
  switch(searchType){
    case 'yes':
    // TODO: function integration
    break;
    case 'no':
    // TODO: search by traits
    break;
    default:
    app(people); // restart app
    break;
  }
  }
function appLastName(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the last name of the person you are looking for?", choice[1]);
  }
function appFirstName(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the first name of the person you are looking for?", choice[2]);
}
function appEyeColor(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the eye color of the person you are looking for?", choice[3]);
}
function appGender(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the gender of the person you are looking for?", choice[4]);
}
function appOccupation(people){
var choice = getInputs();

  var searchType = window.prompt("Do you know the occupation of the person you are looking for?", choice[5]);
}
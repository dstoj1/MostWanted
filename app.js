

function app(people){
  var searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  switch(searchType){
    case 'yes':
    var person = searchByName(people);
   
    break;
    case 'no':
    noAnswer(people);
    break;
    default:
    app(people);  
    break;
  } 
  mainMenu(person, people);
}

function mainMenu(person, people){


  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  var displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    getInfo(people, person);
    break;
    case "family":
    var family;
    family = getFamily(people, person);
    alert(family);
    mainMenu(person, people);
    break;
    case "descendants":
    var descendants;
    var descendantsNames;
    descendants = getDescendants(people,person);
    descendantsNames = descendants.map(function(element) {
      return element.firstName +" " + element.lastName+"\n";
    });
    descendantsNames = descendantsNames.join("");
    alert(descendantsNames);
    mainMenu(person, people);
    break;
    case "restart":
    app(people);
    break;
    case "quit":
    return false;
    break;
    default:
    return mainMenu(person, people); 
  }
}
function searchByName(people){
  var firstName = window.prompt("What is the person's first name?").toLowerCase();
  var lastName = window.prompt("What is the person's last name?").toLowerCase();
    var nameResults = people.filter(function(element){
      if (element.firstName.toLowerCase() === firstName && element.lastName.toLowerCase() === lastName){
        return true;
      }
    })
    return nameResults[0];
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  var personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true; 
}
function getEyeColor(people){
  var eyeColor = prompt("What eyecolor do you want to search for?");
  var eyeColorResults=people.filter(function(element){
     if(element.eyeColor ===  eyeColor){
        console.log(" " + element.firstName + " " + element.lastName + " " + eyeColor);
        return true;
      }
      else{
      return false;
      }
    }); 
    
  var resultString = "The following people have an eyecolor of " + eyeColor + ":\n";
   for(var i = 0; i < eyeColorResults.length; i++) {
    resultString += people[i].firstName + ' ' + people[i].lastName + "\n";
  }
   alert(resultString);
  

  //var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  //if (searchAgain === 'yes'){
    //noAnswer(eyeColorResults);
  //}
 if (eyeColorResults.length > 1){
  alert("Multiple people found please refine your search.");
  noAnswer(eyeColorResults)
 }
 else if(eyeColorResults.length === 0){
  alert("No person found, please use a different search.");
  app(data);
 }
  else{
    var person = eyeColorResults[0];
    mainMenu(person, people);
  }
}
// app(data);

function getHeight(people){
    var height = prompt("What height do you want to search for?");
     var heightResults=people.filter(function(element){
      if(element.height === height){
      console.log(" " + element.firstName + " " + element.lastName + " " + height);
      return true;
    }
    else{
      return false;
    }
  }); 
     var resultString = "The following people have a height of " + height + ":\n";
  for(var i = 0; i < heightResults.length; i++) {
    resultString += people[i].firstName + ' ' + people[i].lastName + "\n";
  }
   alert(resultString);

  //var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  //if (searchAgain === 'yes'){
    //noAnswer(heightResults);
  //}
  if (heightResults.length > 1){
  alert("Multiple people found please refine your search.");
  noAnswer(heightResults);
 }
 else if(heightResults.length === 0){
  alert("No person found, please use a different search.");
  app(data);
 }
  else{
    var person = heightResults[0];
    mainMenu(person, people);
  }
}

function getAge(people){
  var age = prompt("What age do you want to search for?");
  var ageResults=people.filter(function(element){
      var birthArray = element.dob.split("/");
      if(convertToAge(new Date(birthArray[2], birthArray[0], birthArray[1])) == age){
        console.log(" " + element.firstName + " " + element.lastName + " " + age);
        return true;
    }
    else{
      return false;
    }
  });

  var resultString = 'The following people have an age of ' + age + ":\n";
  for(var i = 0; i < ageResults.length; i++) {
    resultString += ageResults[i].firstName + ' ' + ageResults[i].lastName + "\n";
  }

  alert(resultString);

  //var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  //if (searchAgain === 'yes'){
    //noAnswer(ageResults);
  //}
  if (ageResults.length > 1){
  alert("Multiple people found please refine your search.");
  noAnswer(ageResults)
 }
 else if(ageResults.length === 0){
  alert("No person found, please use a different search.");
  app(data);
 }
  else{
    var person = ageResults[0];
    mainMenu(person, people);
  }
}

function getWeight(people){
  var weight = prompt("What weight do you want to search for?");
  var weightResults=people.filter(function(element){
    if(element.weight === weight){
      console.log(" " + element.firstName + " " + element.lastName + " " + weight);
      return true;
    }
    else{
      return false;
    }
  });
  var resultString = 'The following people have a weight of ' + weight + ":\n";
  for(var i = 0; i < weightResults.length; i++) {
    resultString += weightResults[i].firstName + ' ' + weightResults[i].lastName + "\n";
  }
   alert(resultString);

  //var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  //if (searchAgain === 'yes'){
    //noAnswer(weightResults);
  //}
  if (weightResults.length > 1){
  alert("Multiple people found please refine your search.");
  noAnswer(weightResults)
 }
 else if(weightResults.length === 0){
  alert("No person found, please use a different search.");
  app(data);
 }
  else{
    var person = weightResults[0];
    mainMenu(person, people);
  }
}

function getOccupation(people){
  var occupation = prompt("What occupation do you want to search for?");
  var occupationResults = people.filter(function(element){
    if(element.occupation === occupation){
      console.log(" " + element.firstName + " " + element.lastName + " " + occupation)
      return true;
    }
    else{
      return false;
    }
  }); 
  var resultString = 'The following people have an occupation of ' + occupation + ":\n";
     for(var i = 0; i < occupationResults.length; i++) {
    resultString += occupationResults[i].firstName + ' ' + occupationResults[i].lastName + "\n";
  }
   alert(resultString);

  //var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
    // if (searchAgain === 'yes'){
      //noAnswer(occupationResults);
  //}
  if (occupationResults.length > 1){
  alert("Multiple people found please refine your search.");
  noAnswer(occupationResults)
 }
 else if(occupationResults.length === 0){
  alert("No person found, please use a different search.");
  app(data);
 }
  else{
    var person = occupationResults[0];
    mainMenu(person, people);
  }
 }

/* function getCriteria(people){ 
   var weight = window.prompt("What is the weight of the person you are looking for?");
   var height  = window.prompt("What is the height of the person you are looking for?"); 
   var eyeColor = window.prompt("What is the eyeColor of the person you are looking for?");
   var occupation = window.prompt("What is the occupation of the person you are looking for?");
   var age = window.prompt("What is the age of the person you are looking for?");
   

   var criteriaResults = people.filter(function(element){
   if(element.weight == weight && element.height == height && element.eyeColor === eyeColor && element.occupation === occupation && convertOnePersonsDOBToAge(element) == age){
          window.alert(" " + element.firstName);
          return true;
            
    }
  });
}
*/
function getFamily(people, person){
  var familyResults = person.firstName +"'s family:\n";
  familyResults.+= getSpouse(people, person).map(function(element) {
    return element.firstName + " " + element.lastName + "\n";
  });
  familyResults += getChildren(people, person).map(function(element) {
    return element.firstName + " " + element.lastName + "\n";
  });
  familyResults+=getParents(people, person).map(function(element) {
    return element.firstName + " " + element.lastName + "\n";
  });
  familyResults+=getSiblings(people, person).map(function(element) {
    return element.firstName + " " + element.lastName + "\n";
  });
  return familyResults;

}


function getSpouse(people, person){
  var spouseResults = people.filter(function(element){
    if(element.id === person.currentSpouse){
      return true;
    }
    else{
      return false;
    }
    });  
  return spouseResults;
}

function getChildren (people, person){
   var childrenResults = people.filter(function(element){
    for(var i= 0; i < element.parents.length; i++)
      if(person.id === element.parents[i]){

    return true;
     } 
     else{
      return false;
     } 
  });
    
   return childrenResults;
 }  

function getParents(people, person){
  var parentsResults = []
     parentsResults = people.filter(function(element){
      if(element.id === person.parents[0] || element.id === person.parents[1]){
        return true;
      }
      else{
        return false;
      }
     });
     return parentsResults;
}
function getSiblings(people, person){
  var siblingResults = people.filter(function(element){
    if(element.id === person.id){
      return false;
    }

      for(var i = 0; i < person.parents.length; i++){
        if(element.parents.includes(person.parents[i])){
          return true;
        }
      }
  });   
          return siblingResults;
}

function getDescendants(people,person){
    var descendants = [];
    var children = getChildren(people, person);
    descendants = descendants.concat(children);
    var childrenDescendants = [];
       for(var i = 0; i < children.length; i++){
        childrenDescendants.concat(getDescendants(people, children[i]));
  
  }
  descendants = descendants.concat(childrenDescendants)
  return descendants;
}


function convertToAge(bDay) {
   var delta = Date.now() - bDay.getTime();
   var big = new Date(delta);
 
   return Math.abs(big.getUTCFullYear() - 1970);
}

function convertOnePersonsDOBToAge (element) {
    var birthday = element.dob.split("/");
    var OnePersonsAge = convertToAge(new Date(birthday[2], birthday[0], birthday[1]));
    return OnePersonsAge;
  }
    
function noAnswer(people){
var displayOption = prompt("Search by : \n" + "1 = Age \n" + "2 = Height \n" + "3 = Weight \n" + " 4 = Occupation \n" + "5 = EyeColor \n" + "6 = restart");
var person 
switch(displayOption){
  case "1":
  person = getAge(people);
  break;
  case "2":
  person = getHeight(people);
  break;
  case "3":
  person = getWeight(people);
  break;
  case "4":
  person = getOccupation(people);
  break;
  case "5":
  person = getEyeColor(people);
  break;
  case "6":
  app(people);
  return;
  default:
  return(person);
 }
}

function getInfo(people, person){
    alert("Gender: " + person.gender + "\n Date Of Birth: " + person.dob + "\n Height: "
  + person.height + "\n Weight: " + person.weight + "\n Eye Color: " + person.eyeColor);
    return mainMenu(person, people);
}
app(data);
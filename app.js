

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
   getFamily(people, person);
    break;
    case "descendants":
    getDescendants(people,person);
     
    break;
    case "restart":
    app(people);
    break;
    case "quit":
    return;
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
  

  var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  if (searchAgain === 'yes'){
    noAnswer(eyeColorResults);
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

  var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  if (searchAgain === 'yes'){
    noAnswer(heightResults);
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
    resultString += people[i].firstName + ' ' + people[i].lastName + "\n";
  }

  alert(resultString);

  var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  if (searchAgain === 'yes'){
    noAnswer(ageResults);
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
    resultString += people[i].firstName + ' ' + people[i].lastName + "\n";
  }
   alert(resultString);

  var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
  if (searchAgain === 'yes'){
    noAnswer(weightResults);
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
    resultString += people[i].firstName + ' ' + people[i].lastName + "\n";
  }
   alert(resultString);

  var searchAgain = prompt("Do you want to refine your search further? ('yes')").toLowerCase();
     if (searchAgain === 'yes'){
      noAnswer(occupationResults);
  }
 }

 function getCriteria(people){ 
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

function getFamily(people, person){
  var familyResults = [];
  familyResults.push(getSpouse(people, person));
  familyResults.push(getChildren(people, person));
  familyResults.push(getParents(people, person));
  familyResults.push(getSiblings(people, person));

console.log(familyResults);
  return familyResults;

}


function getSpouse(people, person){
  var spouseResults = people.filter(function(element){
    if(element.id === person.currentSpouse){
      return true;
    }
    });  
  return spouseResults;
}

function getChildren (people, parent){
   var childrenResults = people.filter(function(person){
    for(var i= 0; i < person.parents.length; i++)
      if(person.parents[i] === parent.id){

    return true;
     }  
  });
    
   return childrenResults;
 }  

function getParents(people, child){
  var parentsResults = []
     for(var parent = 0; parent < child.parents.length; parent++){
           for(var person = 0; person < people.length; person++){
              if(child.parents[parent] === people[person].id){
                   parentsResults.push(people[person]);
              }
           }
     }
     return parentsResults;
}
function getSiblings(people, person){
  var siblingResults = people.filter(function(element){
      for(var i = 0; i < person.parents.length; i++){
        if(element.parents.includes(person.parents[i])){
          return true;
        }
      }
  });   
          return siblingResults;
}

function getDescendants(people,person,descendants = []){
    var children = getChildren(people, person);
    descendants.push(children);
       for(var i = 0; i < children.length; i++){
        getDescendants(people, children[i], descendants);
  
  }
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
var displayOption = prompt("Search by : \n" + "1 = Age \n" + "2 = Height \n" + "3 = Weight \n" + " 4 = Occupation \n" + "5 = EyeColor \n" + "6 = Back to main menu");
switch(displayOption){
  case "1":
  getAge(people);
  break;
  case "2":
  getHeight(people);
  break;
  case "3":
  getWeight(people);
  break;
  case "4":
  getOccupation(people);
  break;
  case "5":
  getEyeColor(people);
  break;
  case "6":
  app(people);
  return;
  default:
  return(people);
 }
}

function getInfo(people, person){
    alert("Gender: " + person.gender + "Date Of Birth: " + person.dob + "Height: "
  + person.height + "Weight: " + person.weight + "Eye Color: " + person.eyeColor);
    return mainMenu(people, person);
}
app(data);
// // Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    
    document.getElementById("missionTarget").innerHTML =
    // Here is the HTML formatting for our mission target div.
    
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

 }
     
        
        
function validateInput(testInput) {
    
    if (testInput === "") {
        return ("Empty"); 
    
    } else if ( isNaN(testInput ) == false) {
        return ("Is a Number");
    
    } else if ( isNaN (testInput) == true) {
        return ("Not a Number");
    };

};
        

    
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   
   let passCheck = 0;
   
    //validate PILOT
    if (validateInput(pilot) === "Empty") {
        alert("Invalid: Pilot Name is empty.");
    } else if (validateInput(pilot) === "Is a Number") {
        alert("Invalid: Pilot Name is a Number"); 
    } else { 
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch.`;
        passCheck += 1;
    } 
    
    //validate COPILOT
    if (validateInput(copilot) === "Empty") {
        alert("Invalid: Copilot Name is empty.");
    } else if (validateInput(copilot) === "Is a Number") {
        alert("Invalid: Copilot Name is a Number"); 
    } else { 
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch.`;
        passCheck += 1;
    }
 
    //validate FUEL LEVEL
    if (validateInput(fuelLevel) === "Empty") {
        alert("Invalid: Fuel Level is empty.");
    } else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Invalid: Fuel Level is not a Number"); 
    } else if (Number(fuelLevel) >= 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        passCheck += 1;
    } else if (Number(fuelLevel) < 10000) {
        document.getElementById("faultyItems").style = "visibility: visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    }
 
    //validate CARGO LEVEL
    if (validateInput(cargoLevel) === "Empty") {
        alert("Invalid: Cargo Level is empty."); 
    } else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Invalid: Cargo Level is not a Number"); 
    } else if (Number(cargoLevel) <= 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        passCheck += 1;
    } else if (Number(cargoLevel) > 10000) {
        document.getElementById("faultyItems").style = "visibility: visible"; 
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
    }

    if (passCheck === 4) { 
        document.getElementById("faultyItems").style = "visibility: visible";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = 'green'; 
    }
}
 


 async function myFetch() {
     let planetsReturned;
 
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
 
     return planetsReturned;
 }
 
function pickPlanet(planets) {         //planets = json array of planets
  let index = Math.floor(Math.random()*planets.length);
  return planets[index];                //should return json[index]
}
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
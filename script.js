// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const pilotName = document.querySelector("input[name=pilotName]");
        const copilotName = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoMass = document.querySelector("input[name=cargoMass]");
        const list = document.getElementById("faultyItems");
            if ( formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value) === "pass") {
                document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
                document.getElementById("launchStatus").style.color = "green"; 
            } 
               
            
            
            
            //document.getElementById("pilotStatus").innerHTML = `${pilotName.value}`; 
        

    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    
 });
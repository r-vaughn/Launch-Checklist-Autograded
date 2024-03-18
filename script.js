// Write your JavaScript code here!



window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const pilotName = document.querySelector("input[name=pilotName]");
        const copilotName = document.querySelector("input[name=copilotName]");
        const fuelLevel = document.querySelector("input[name=fuelLevel]");
        const cargoMass = document.querySelector("input[name=cargoMass]");
        const list = document.getElementById("faultyItems");
            formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);    
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        console.log(randomPlanet);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
        
    })
    
 });
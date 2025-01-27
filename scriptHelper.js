// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    if (name !== undefined) {
        let missionTarget = document.getElementById("missionTarget");
        missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
        `
    }
 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }   else if (!isNaN(testInput)) {
        return "Is a Number";
    }   else {
        return "Not a Number";
    }
    
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
     if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
         alert("All fields are required.");
         return;
     }  else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level must be a number.");
        return;
    }   else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Mass must be a number.");
        return;
    }
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    if (fuelLevel < 10000 || cargoLevel > 10000) {
        list.setAttribute("style", "visibility: visible");
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        fuelStatus.innerHTML = `Fuel level ${fuelLevel < 10000 ? "too low" : "high enough"} for launch`;
        cargoStatus.innerHTML = `Cargo mass ${cargoLevel > 10000 ? "too heavy" : "low enough"} for launch`;
    }   else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;

     let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     planetsReturned = await response.json().then( json => {return json});
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    console.log(planets);
    let rando = Math.random();
    let pick = Math.floor(rando*planets.length);
    return planets[pick];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
         alert("All fields are required.")
         event.preventDefault();
     }  else if (validateInput(fuelLevel) === "Not a Number") {
        alert("Fuel Level must be a number.");
        event.preventDefault();
    }   else if (validateInput(cargoLevel) === "Not a Number") {
        alert("Cargo Mass must be a number.");
        event.preventDefault();
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
    // event.preventDefault();
 }
 
 async function myFetch() {
    // try {
    //     const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    //     if (!response.ok) {
    //         throw new Error(`HTTP error: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     // console.log(data);
    //     return data;
    // }   catch (error) {
    //     console.error(`Could not get planets: ${error}`);
    // }
     let planetsReturned;

     let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     planetsReturned = await response.json().then( json => {return json});
    //  planetsReturned = await jsonResponse.then( json => json);
    //  console.log(planetsReturned);
 
    //  planets = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    //     response.json().then( function(json) {
    //         console.log(json);
    //         planetsReturned = json;
    //     });
    //  });
    //  console.log(planetsReturned);
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    console.log(planets);
    let rando = Math.random();
    // planets.then((data) => {
    //     let pick = Math.floor(rando*data.length);
    //     console.log(data[pick]);
    //     return data[pick];
    // });
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;
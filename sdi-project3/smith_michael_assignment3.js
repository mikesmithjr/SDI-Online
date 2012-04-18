// Assignment: Project 3 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane



// Procedure
var getSunStatus = function (sunStatus) {
	if (sunStatus = "up") { 
		console.log("Get out of bed!");
	}
	else {
		console.log("Stay in Bed and sleep");
	};
};

getSunStatus("up")

// Boolean Function
var getWeatherStatus = function (outsideTemp) {
	var weatherStatus;
	if (outsideTemp >= 70) {
		weatherStatus = "The weather is great lets go flying!";
		return weatherStatus;
	} else {
		console.log("Lets wait a little while for it to warm up.")
	};
};

var outsideWeather = getWeatherStatus(75);
console.log(outsideWeather)

// String Function 
var getTodaysAirstrip = function (airstripName) {
	var todaysAirstrip;
	todaysAirstrip = "The " + airstripName + " is a great place to fly";

	return todaysAirstrip;
};
var todaysAirfield = getTodaysAirstrip("North Dallas RC Club");
console.log(todaysAirfield)

//JSON Data

var pilotsList = function (json) {
	for (var i = 0; i < json.pilots.length; i++){
		var pilot = json.pilots[i];
		console.log(pilot.name + " is a " + pilot.flyingExperience 
					+ " skilled pilot and can fly for " + pilot.flightTime + " minutes.");
	};
};

pilotsList(json);


// Boolean Function 2 

var getPlaneStatus = function (safeLanding) {
	var planeStatus;
	if (safeLanding === true) {
	planeStatus = "Let's fly again!!!";
	return planeStatus;
} else {
	planeStatus = "Back home for repairs.";
	return planeStatus;

};

};

var myPlaneStatus = getPlaneStatus(true)
console.log(myPlaneStatus)
























//alert("JavaScript works!");
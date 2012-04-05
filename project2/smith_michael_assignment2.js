// Assignment: Project 2 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane




//Variable Assignments
var pilotsNames = ["Jack", "Nancy", "Al", "Jesus"];
	maxFlightQtyPerPilot = [3];

	weatherCondition = "Good";
	planeStatus = "Loaded"

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

// Number Function
var getFlightTime = function (maxFlightTime) {
	var remainFlightTime;
	while (maxFlightTime > 0) {
	
	remainFlightTime = "Each gets " + maxFlightTime + " minutes to fly today.";
	maxFlightTime -=5;
	//console.log(remainFlightTime);
	return remainFlightTime;
};

};
//getFlightTime(15)
var flightTime = getFlightTime(15);
console.log(flightTime);

// String Function 
var getPilotList = function () {
	var todaysPilots;
	todaysPilots = pilotsNames[0] + ", " + pilotsNames[1] + ", " + pilotsNames[2] + " and " + pilotsNames[3] + " want to go flying today.";
	return todaysPilots;
};
var todaysPilotList = getPilotList();
console.log(todaysPilotList)


// String Function 
var getTodaysAirstrip = function (airstripName) {
	var todaysAirstrip;
	todaysAirstrip = "The " + airstripName + " is a great place to fly";

	return todaysAirstrip;
};
var todaysAirfield = getTodaysAirstrip("North Dallas RC Club");
console.log(todaysAirfield)


// Array Function 
var getTotalPilotFlightTime = function (maxFlightTime) {
	var pilotFlightTime;
	for (var i=0, p=pilotsNames.length, m=maxFlightTime; i < p; i++) {
	
	pilotFlightTime =  pilotsNames[i] + " can fly for " + maxFlightQtyPerPilot * m + " minutes today.";

	return pilotFlightTime;
};

};
var totalPilotFlightTime = getTotalPilotFlightTime(15);
console.log(totalPilotFlightTime);

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

console.log(outsideWeather + " " + todaysAirfield);
console.log(todaysPilotList + " " + flightTime);
console.log(totalPilotFlightTime + " " + myPlaneStatus);


alert("JavaScript works!");
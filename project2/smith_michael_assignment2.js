// Assignment: Project 2 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane


/*
// Variable Assignments

var	weatherCondition = "Good";
	planeStatus = "Loaded"
	maxFliteTime = 15;
	flightTime = 10;
	safeLanding = true;

// How's the weather?

if (weatherCondition = "Good") {
	console.log('Let\'s go flying!');
} else {
	console.log('There won\'t be any flying today');
};

// Is the plane loaded in the truck?

if (planeStatus = "Loaded") {
	console.log("Off to the flying field.");
} else {
	console.log("Better get the epuipment loaded.");
};

// How long have you been in the air?

if (flightTime >= 15) {
	console.log("You are out of battery land quick before you crash!!!");
} else {
	console.log("You have a few more minutes of flying.");
};

// Did you land the plane safely?

if (safeLanding === true) {
	console.log("Let's fly again!!!");
} else {
	console.log("Back home for repairs.")
};
*/

//Variable Assignments
var maxFlightTime = 15;
	pilotsNames = ["Jack", "Nancy", "Al", "Jesus"];
	flightQty = [3,1,2,3];

// Number Function
var getFlightTime = function () {
	while (maxFlightTime > 0) {
	console.log(maxFlightTime + "minutes left to fly.")
	maxFlightTime -=5;
};

};
getFlightTime()
console.log("Time to land the plane.");




// Array Function
var getTotalPilotFlightTime = function () {
	var maxFlightTime = 15
	for (var i=0, p=pilotsNames.length, m=maxFlightTime; i < p; i++) {
	console.log( pilotsNames[i] + " was flying for " + flightQty[i] * m + " minutes today.");
};

};

getTotalPilotFlightTime()

//alert("JavaScript works!");
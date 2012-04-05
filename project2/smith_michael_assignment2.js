// Assignment: Project 2 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane


/*
// Variable Assignments

var	weatherCondition = "Good";
	planeStatus = "Loaded"
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



*/

//Variable Assignments
var maxFlightTime = 15;
	pilotsNames = ["Jack", "Nancy", "Al", "Jesus"];
	flightQty = [3,1,2,3];
	weatherCondition = "Good";
	planeStatus = "Loaded"

// Procedure
var getSunStatus = function (sunStatus) {
	if (sunStatus = "up") { "Get out of bed!"
	}
	else {"Stay in Bed and sleep"};
};

getSunStatus("up")

// Boolean Function
var getWeatherStatus = function (outsideTemp) {
	if (outsideTemp >= 70) {
		console.log("The weather is great lets go flying!")
	} else {
		console.log("Lets wait a little while for it to warm up.")
	};
};

getWeatherStatus(72)

// Number Function
var getFlightTime = function () {
	while (maxFlightTime > 0) {
	console.log(maxFlightTime + "minutes left to fly.")
	maxFlightTime -=5;
};

};
getFlightTime()
console.log("Time to land the plane.");


// String Function
var getTodaysPilots = function () {


};

// Array Function
var getTotalPilotFlightTime = function (maxFlightTime) {
	for (var i=0, p=pilotsNames.length, m=maxFlightTime; i < p; i++) {
	console.log( pilotsNames[i] + " was flying for " + flightQty[i] * m + " minutes today.");
};

};

getTotalPilotFlightTime(15)

// Boolean Function 2

var getPlaneStatus = function (safeLanding) {
	if (safeLanding === true) {
	console.log("Let's fly again!!!");
} else {
	console.log("Back home for repairs.")
};

}

getPlaneStatus(true)





//alert("JavaScript works!");
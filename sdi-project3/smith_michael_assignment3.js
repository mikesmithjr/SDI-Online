// Assignment: Project 3 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane



//Global Variables
var planeNames = ["Super Cub", "Extra 300", "The Beast"];
var	maxFlightQtyPerPilot = [3];
var	weatherCondition = "Good";
var	planeStatus = "Loaded";
var pilotsNames = ["Joaquin", "Al", "Gary"];






// Procedure
var wakingUp = {
	getSunStatus: function (sunStatus) {
	if (sunStatus = "up") { 
		console.log("Get out of bed!");
	}
	else {
		console.log("Stay in Bed and sleep")
	}
}
};
wakingUp.getSunStatus("up");



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
var airfield = {
			getTodaysAirstrip: function (airstripName) {
			var todaysAirstrip;
			todaysAirstrip = "The " + airstripName + " is a great place to fly";
			return todaysAirstrip;
			console.log(todaysAirstrip);
		},
			
			
			};

airfield.getTodaysAirstrip("North Dallas RC Club");
console.log(airfield.getTodaysAirstrip("North Dallas RC Club"));
			

//airfield.getTodaysAirstrip("North Dallas RC Club");


var runway = {
	id: "01",
	direction: "East-West",
	open: true,
	getStatus: function (runwayStatus) {
	if (runwayStatus = true) {console.log("Runway " + runway.id + " going " + 
								runway.direction + " is open for flight");
	} else {console.log("We have to wait for the runway.")};

	}
};
runway.getStatus();
runway.id = "Main";
runway.getStatus();


//JSON Data

var pilotsExperienceList = function (json) {
	for (var i = 0; i < json.pilots.length; i++){
		var pilot = json.pilots[i];
		console.log(pilot.name + " is a " + pilot.flyingExperience 
					+ " skilled pilot and can fly for " + pilot.flightTime + " minutes per flight.");
	};
};

pilotsExperienceList(json);

// String Function 
var getPlaneList = function () {
	var todaysPlanes;
	todaysPlanes =  "The " + planeNames[0] + ", " + planeNames[1] + " and " + planeNames[2] + " are loaded to go flying.";
	return todaysPlanes;
};
var todaysPlaneList = getPlaneList();
console.log(todaysPlaneList);

// Number Function
var flightTime = {
	getFlightTime: function (maxFlightTime) {
		var remainFlightTime;
		while (maxFlightTime > 0) {	
		remainFlightTime = "Each gets " + maxFlightTime + " minutes to fly today.";
		maxFlightTime -=5;
		//console.log(remainFlightTime);
		return remainFlightTime;
};

}
};
//getFlightTime(15)
flightTime.getFlightTime(15);
console.log(flightTime.getFlightTime(15));


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

var myPlaneStatus = getPlaneStatus(false);
console.log(myPlaneStatus);
























//alert("JavaScript works!");
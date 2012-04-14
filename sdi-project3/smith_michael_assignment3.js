// Assignment: Project 3 SDI Online
// Author: Michael Smith
// Story: Flying an Radio-Controlled Airplane


var pilotsList = function (json) {
	for (var i = 0; i < json.pilots.length; i++){
		var pilot = json.pilots[i];
		console.log(pilot.name + " is a " + pilot.flyingExperience 
					+ " skilled pilot and can fly for " + pilot.flightTime + " minutes.");
	};

};

pilotsList(json);











alert("JavaScript works!");
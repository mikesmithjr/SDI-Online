// Assignment: Project 4 SDI Online
// Author: Michael Smith
// Building Library




var mikesLib = function () {

	checkEmail = function(emailAddress) {
		var email = emailAddress
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
		if (emailPattern.test(email)) {
			console.log(email + " is a valid email address.")
		} else {
			console.log(email + " is not a valid email address.")
		};
		return {
			"checkEmail" : checkEmail
		};

	}











};

var emailValidation = mikesLib.checkEmail();

console.log(emailValidation("snuffyms@gmail.com"));


























alert("JavaScript works!");
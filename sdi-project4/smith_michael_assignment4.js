// Assignment: Project 4 SDI Online
// Author: Michael Smith
// Building Library





var mikesLib = function () {

	//First Function
	var checkEmail = function (emailAddress) {
		var email = emailAddress
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
		if (emailPattern.test(email)) {
			console.log(email + " is a valid email address.");
		} else {
			console.log(email + " is not a valid email address.");
		};
		
	};
	return {
		"checkEmail": checkEmail
	};

	//Second Function
	var checkPhoneNum = function (testPhoneNumber) {
		var phoneNumber = testPhoneNumber;
		var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (pattern.test(phoneNumber)) {
			var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
			console.log(phoneNumber + " is a valid phone number.");
		} else {
			console.log(phoneNumber + " is not a valid phone number.");
		}

	};
	return {
		"checkPhoneNum" : checkPhoneNum
	};

	//Third Function
	var formatMoney = function (amount) {
		var money = amount;
		money.toFixed(2);
		console.log(money.toFixed(2));
	};
	return {
		"formatMoney" : formatMoney
	};

	//Fourth Function
	var getNumberOfDays = function (firstDate, secondDate) {
		var dayOne = new Date(firstDate);
		var dayTwo = new Date(secondDate);
		var lengthOfDay = 1000 * 60 * 60 * 24;
		console.log(Math.floor((dayTwo.getTime() - dayOne.getTime()) / (lengthOfDay)) + " days have past.");
	};
	return {
		"getNumberOfDays" : getNumberOfDays
	};

	//Fifth Function
	//Sixth Function
};
















//alert("JavaScript works!");
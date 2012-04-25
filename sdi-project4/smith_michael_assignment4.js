// Assignment: Project 4 SDI Online
// Author: Michael Smith
// Building Library





var mikesLib = function () {

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

	var formatMoney = function(amount) {
		var money = amount;
		money.toFixed(2);
		console.log(money.toFixed(2));
	};
	return {
		"formatMoney" : formatMoney
	};

};

















//alert("JavaScript works!");
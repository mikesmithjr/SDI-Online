// Assignment: Project 4 SDI Online
// Author: Michael Smith
// Building Library





var mikesLib = function () {

	//First Function
	var checkEmail = function (emailAddress) {
		var email = emailAddress
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
		if (emailPattern.test(email)) {
			return email + " is a valid email address.";
		} else {
			return email + " is not a valid email address.";
		};
		
	};
	

	//Second Function
	var checkPhoneNum = function (testPhoneNumber) {
		var phoneNumber = testPhoneNumber;
		var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		if (pattern.test(phoneNumber)) {
			var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
			return phoneNumber + " is a valid phone number.";
		} else {
			return phoneNumber + " is not a valid phone number.";
		}

	};
	

	//Third Function
	var formatMoney = function (amount) {
		var money = amount;
		money.toFixed(2);
		return money.toFixed(2);
	};
	

	//Fourth Function
	var getNumberOfDays = function (firstDate, secondDate) {
		var dayOne = new Date(firstDate);
		var dayTwo = new Date(secondDate);
		var lengthOfDay = 1000 * 60 * 60 * 24;
		return Math.floor((dayTwo.getTime() - dayOne.getTime()) / (lengthOfDay)) + " days have past.";
	};
	

	//Fifth Function
	var testUrl = function (urlToTest) {
		var url = urlToTest;
		var urlPattern = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
		var urlTest = urlPattern.test(url);
		return "This url is " + urlTest + ".";
		if (url.charAt(4) == "s") {
			return "This is a secure https url.";
		}
		if (url.charAt(4) == ":") {
			return "This is a standard http url."
		};
	};


	//Sixth Function
	var changeCase = function (changeThis) {
		return changeThis.replace(/\b([a-z])/g, function (_, initial) {
			return initial.toUpperCase();
		});
	};

	};

	return {
		"checkEmail": checkEmail,
		"checkPhoneNum" : checkPhoneNum,
		"formatMoney" : formatMoney,
		"getNumberOfDays" : getNumberOfDays,
		"testUrl" : testUrl,
		"changeCase" : changeCase
	};
};














alert("JavaScript works!");
/*

Copy values from one object to another, merge and print them.

*/

"use strict";

const name = {
	firstName: "Philip",
	lastName: "Fry"
};

const details = {
	job: "Delivery Boy",
	employer: "Planet Express"
};

const completeProfile = {};

// copying from name to completeProfile.
copyInfo(completeProfile, name);
console.log("name: \n" + JSON.stringify(name));
console.log("completeProfile: \n" + JSON.stringify(completeProfile));

// copying and merging details to completeProfile.
copyInfo(completeProfile, details);
console.log("details: \n" + JSON.stringify(details));
console.log("completeProfile: \n" + JSON.stringify(completeProfile));

/*** functions ***/
function copyInfo(targetObj, givenObj) {
	for (let key in givenObj) {
		if (key in targetObj) {
			// check for duplicates.
			continue;
		} else {
			targetObj[key] = givenObj[key];
		}
	}
}

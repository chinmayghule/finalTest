/*

Create a nested array object called operatingSystem and add below key and values
Name - Ubuntu , version - 18.4 , license - open source

*/

"use strict";

let operatingSystem = [];

let obj = {
	name: "Ubuntu",
	version: "18.4",
	license: "Open Source"
};

operatingSystem.push(obj);

for (key in operatingSystem[0]) {
	console.log(`${key}: ${operatingSystem[0][key]}`);
}

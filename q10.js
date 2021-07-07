/*

In order to make the properties in the function refer to itself i.e. to the object that is being created via the constructor function, we need to use the this keyword.

The 'this' keyword creates an empty object. Following shows a simplified version.


--- usual case ---
function Hero(name, level) {
	this.name = name;
	this.level = level;
}

--- above can be written as ---
function Hero(name, level) {
	let this = {};
	this.name = name;
	this.level = level;
	
	return this;
}

*/

"use strict";

function Hero(name, level) {
	this.name = name;
	this.level = level;
}

let hero = new Hero("One Punch Man", 0);

alert(`Name: ${hero.name}\nLevel: ${hero.level}`);

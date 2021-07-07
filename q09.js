/*

How to access and print greet function from the given code?

*/

"use strict";

const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function () {
		return `Hi, my name is ${this.name}!`;
	}
};

// access and print greet function.
alert(gimli.greet());

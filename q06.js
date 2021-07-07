/*

How to delete 'Beethoven' from set

*/

// Elements from a Set are deleted using the built-in delete method.

"use strict";

const set = new Set(["Beethoven", "Mozart", "Chopin", "Chopin"]);

// print set.
let setElements = [];
for (let element of set) {
	setElements.push(element);
}
alert(JSON.stringify(setElements));

// delete 'Beethoven' from set.
set.delete("Beethoven");

// print set again.
setElements = [];
for (let element of set) {
	setElements.push(element);
}
alert(JSON.stringify(setElements));

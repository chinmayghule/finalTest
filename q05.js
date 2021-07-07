/*

What will be the output for the above code?

*/

"use strict";

var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function (num) {
	return num / 2;
});
print(new_arr);

/*

print keyword will print a blank web page.

*/

alert(new_arr); // 1,28,39,17,32.5

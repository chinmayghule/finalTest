/*

Will both functions return the same thing? Why or why
not?

*/

"use strict";

function foo1() {
	return {
		bar: "hello"
	};
}
function foo2() {
	return;
	{
		bar: "hello";
	}
}

alert(JSON.stringify(foo1()));
alert(JSON.stringify(foo2()));
alert(foo1() === foo2());

/*

---Output---
{bar: "hello"}
undefined
false

Both functions do not return the same value, as indicated in the third popup, which is false.

*/

/*

How to fetch the millisecond according to universal time from a given Date object?

*/

"use strict";

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00');


// fetching millisecond using built-in getMilliseconds function.
alert(dateToday.getMilliseconds());
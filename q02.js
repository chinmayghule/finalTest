/*

Display the reading status (i.e. display book name, author
name and reading status) of the following books.

*/

"use strict";

var library = [
	{
		author: "Bill Gates",
		title: "The Road Ahead",
		readingStatus: true
	},
	{
		author: "Steve Jobs",
		title: "Walter Isaacson",
		readingStatus: true
	},
	{
		author: "Suzanne Collins",
		title: "Mockingjay: The Final Book of The Hunger Games",
		readingStatus: false
	}
];

for (let book of library) {
	let bookInfo = `Author: ${book.author}\nTitle: ${book.title}\nReading Status: ${book.readingStatus}`;

	alert(bookInfo);
}

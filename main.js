// Steven Sober
// 09-10-2017
// Homework - Flashcard Generator
// main.js

// Requires BasicCard and ClozeCard modules...
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

// Create some cards...
var firstPresident = new BasicCard("Who was the first president of the United States?",
								   		  "George Washington");

// Log the card properties.
console.log("Front: " + firstPresident.front);
console.log("Back : " + firstPresident.back);

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.",
													 "George Washington");

// Log the card properties.
console.log("Cloze   : " + firstPresidentCloze.cloze);
console.log("Partial : " + firstPresidentCloze.partial);
console.log("FullText: " + firstPresidentCloze.fullText);

// Error Case:
var brokenCloze = new ClozeCard("This doesn't work", "oops");

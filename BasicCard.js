// Steven Sober
// 09-10-2017
// Homework - Flashcard Generator
// BasicCard.js

// Constructor:
function BasicCard(front, back) {
	this.front = front;
	this.back  = back;
}

module.exports = BasicCard;

// ***************************************************************************
// Test Execution
// ***************************************************************************

// Create a card.
var firstPresident = new BasicCard("Who was the first president of the United States?",
								   		  "George Washington");

// Log the card properties.
console.log("Front: " + firstPresident.front);
console.log("Back : " + firstPresident.back);

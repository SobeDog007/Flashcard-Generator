// Steven Sober
// 09-10-2017
// Homework - Flashcard Generator
// CLI.js

// Requires BasicCard and ClozeCard modules...
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var inquirer  = require("inquirer");

// Get the command mode input.
var mode   = process.argv[2];

console.log("Mode: " + mode);

var createCard = function() {

	if (mode === "basic")
	{
		// Prompt user for card information.
		inquirer.prompt([
			{
				name: "front",
			  	message: "Card Front? "

			}, {

			  	name: "back",
			  	message: "Card Back? "
			}

		]).then(function(answers) {

			// Create a new basic card.
			var newBasicCard = new BasicCard(answers.front, answers.back);

			// Log the card properties.
			console.log("Front: " + newBasicCard.front);
			console.log("Back : " + newBasicCard.back);
		});
	}

	else if (mode === "cloze")
	{
		// Prompt user for card information.
		inquirer.prompt([
			{
				name: "text",
			  	message: "Full Text? "

			}, {

			  	name: "cloze",
			  	message: "Cloze? "
			}

		]).then(function(answers) {

		   // Create a new cloze card.
			var newClozeCard = new ClozeCard(answers.text, answers.cloze);

			// Log the card properties.
			console.log("Cloze   : " + newClozeCard.cloze);
			console.log("Partial : " + newClozeCard.partial);
			console.log("FullText: " + newClozeCard.fullText);
		});
	}

	else
	{
	   console.log("\nInvalid mode!  Please try again!");
	}
};

createCard();

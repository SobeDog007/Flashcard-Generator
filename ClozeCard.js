// Steven Sober
// 09-10-2017
// Homework - Flashcard Generator
// ClozeCard.js

// Constructor:
function ClozeCard(text, cloze) {

	if (this instanceof ClozeCard)
	{
		this.fullText  = text;
		this.cloze     = cloze;
		
		// Validate that cloze is indeed part of the full text.
		if (this.fullText.includes(cloze))
		{
			this.partial = this.fullText.replace(this.cloze, "... ");
		}

		else
		{
			console.log("Error: Cloze not part of text!");
			this.partial = "";
		}
	}
		
	else
	{
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;

// ***************************************************************************
// Test Execution
// ***************************************************************************

// // Create a card.
// var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.",
// 													 "George Washington");
// // Log the card properties.
// console.log("Cloze   : " + firstPresidentCloze.cloze);
// console.log("Partial : " + firstPresidentCloze.partial);
// console.log("FullText: " + firstPresidentCloze.fullText);

// // Error Case:
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

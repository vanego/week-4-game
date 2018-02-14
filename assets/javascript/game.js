
var targetNumber;
var counter = 0;
var wins = 0;
var loss = 0;
var imageCrystals = ["assets/images/shell.png", "assets/images/starfish.gif", "assets/images/turtle-png.png", "assets/images/chest.png"];

// restart function will set the counter to zero,
// generate a new target number
// generate new random values to images
function start(){
	counter=0;
	generateTargetNumber();
	generateRandomValues();
	// call function to update wins html
	// call function to update loss html
	// call function to update counter in html
}

// everytime the page loads a new target Number will be randomly selected between 19-120.
function generateTargetNumber(){
	targetNumber = Math.floor((Math.random() * 102) + 19);
	$("#number-to-guess").text(targetNumber);
	console.log(targetNumber);
}



alert ("Click on the images until you reach the target Number. All four images have different values assigned to them.");
// // each of the four pictures will have a random value assigned to them. (use the math.random function to assign random values to the four pictures) (use the slide show images array.
function generateRandomValues () {
	for (var index = 0; index < imageCrystals.length; index++) {
		var randomValue = Math.floor((Math.random() *12) +1);
		
		// <img src="assets/images/pearl.jpg" value="randomValue"/>
		var myImage = $("<img>");
		myImage.attr("src",imageCrystals[index]);
		myImage.attr("value", randomValue);
		myImage.addClass("crystal-image");

		$("#crystals").append(myImage);
	}
	
}

// as the player selects a picture, the counter will increase according to the images assigned value.
$(".crystal-image").on("click", function() {

	console.log("I was clicked!");

	var crystalValue = ($(this).attr("value"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	$("#counter").text(counter);

	
	// alert("New score: " + counter); show counter on html
	$("#counterNumber").text(counter);

	// if player wins must accurately reach the target number
	if (counter === targetNumber) {
		alert ("You Win!");
		start();
		wins++;
		$("#wins").text(wins);
		// show wins on html .text jquery
	}

	// if player exeeds target number, then player loses.
	else if (counter > targetNumber) {
		alert ("You lose!");
		start();
		loss++;
		$("#loss").text(loss);
		// show loss on html
	}
});

start();

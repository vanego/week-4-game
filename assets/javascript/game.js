
// everytime the page loads a new target Number will be randomly selected. (make an array? or find a function to randomly select a number between 19-120)
var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var counter = 0;
// each of the four pictures will have a random value assigned to them. (use the math.random function to assign random values to the four pictures) (use the slide show images array.

	// var images = ["images/bootstrap.png","images/github-logo.jpg", "images/loading.gif", "images/logo_JavaScript.png")

var numberOptions = [10, 5, 3, 7];

for (var i = 0; i < numberOptions.length; i++) {

	var imageCrystal = $("<img>");

	imageCrystal.addClass("crystal-image");

	imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

	imageCrystal.attr("data-crystalvalue", numberOptions[i]);

	$("#crystals").append(imageCrystal);
}	

// as the player selects a picture, the counter will increase according to the images assigned value.
	$(".crystal-image").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		counter += crystalValue;
		alert("New score: " + counter);

// if player wins must accurately reach the target number
		if (counter === targetNumber) {
			alert ("You Win!");
		}


// if player exeeds target number, then player loses.
		else if (counter >= targetNumber) {
			alert ("You lose!");
		}
	});



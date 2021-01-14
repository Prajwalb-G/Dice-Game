var randomDice1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomDice1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);







var randomDice2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomDice2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource);






if (randomDice1 > randomDice2) {
	document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomDice1 < randomDice2) {
	document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
	document.querySelector("h1").innerHTML = "draw!";
}


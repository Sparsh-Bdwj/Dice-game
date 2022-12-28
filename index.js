var randomNumber1 = Math.floor(Math.random() * 6) + 1; // This will select a random number between 1-6

var selectedImage1 = "images/dice" + randomNumber1 + ".png" // Adding random number to src value by concatination 

document.querySelector(".img1").setAttribute("src", selectedImage1); // Changing src value

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var selectedImage2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img2").setAttribute("src", selectedImage2);

// If player 1 Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Playes 1 Wins";
} else if (randomNumber2 === randomNumber1) {
    document.querySelector("h1").textContent = "Draw Try Again";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins";
}
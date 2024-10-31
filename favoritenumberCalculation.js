const ps = require("prompt-sync");
const prompt = ps();

// Declare a variable to hold the favorite number
const favNumber = 25;
let userGuess = null;

// Use a while loop to prompt the user until they guess correctly
while (userGuess !== favNumber) {
    // Prompt the user for their guess
    userGuess = parseInt(prompt("Guess my favorite number:"));

    // Check if the guess is correct, too high, or too low
    if (userGuess < favNumber) {
        console.log("Your guess is too low. Try again!");
    } else if (userGuess > favNumber) {
        console.log("Your guess is too high. Try again!");
    } else {
        console.log("Congratulations! You guessed it right!");
    }
}
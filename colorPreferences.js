const ps = require("prompt-sync");
const prompt = ps();

// My three favorite colors
let favoriteColors = ['black', 'white', 'red'];

// Function to prompt the user for a new color
function addColor() {
    // Prompt the user to enter a new color
    let newColor = prompt("Please enter a new color you like:");

    // Check if the user entered a value
    if (newColor) {
        // Add the new color to the array
        favoriteColors.push(newColor);
        
        // Print the updated array to the console
        console.log("Updated favorite colors:", favoriteColors);
    } else {
        console.log("No color entered. Please try again.");
    }
}

// Call the function to add a color
addColor();
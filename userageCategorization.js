const ps = require("prompt-sync");
const prompt = ps();

// Function to categorize user by age
function categorizeAge() {
    // Collect user's age
    const age = parseInt(prompt("Please enter your age:"));

    // Nested if-else statement to categorize the user
    if (age < 5) {
        console.log("You are a Toddler (under 5 years).");
    } else {
        if (age >= 5 && age <= 12) {
            console.log("You are a Child (5-12 years).");
        } else {
            if (age >= 13 && age <= 19) {
                console.log("You are a Teenager (13-19 years).");
            } else {
                if (age >= 20 && age <= 35) {
                    console.log("You are a Young Adult (20-35 years).");
                } else {
                    if (age >= 36 && age <= 60) {
                        console.log("You are Middle-Aged (36-60 years).");
                    } else {
                        console.log("You are a Senior (over 60 years).");
                    }
                }
            }
        }
    }
}

// Call the function
categorizeAge();
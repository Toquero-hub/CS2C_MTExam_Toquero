const ps = require("prompt-sync");
const prompt = ps();

// Initialize subject arrays
let DSA = [];
let PL = [];
let Networks = [];

// Function to display current enrolled students in a subject
function displayEnrolledStudents(subjectArray) {
    if (subjectArray.length === 0) {
        console.log("No students enrolled.");
    } else {
        console.log("Currently enrolled students:");
        subjectArray.forEach((student, index) => {
            console.log(`${index + 1}. ${student}`);
        });
    }
}

// Function to enroll a student
function enrollStudent(subjectArray) {
    const studentName = prompt("Enter the name of the student to enroll:");
    subjectArray.push(studentName);
    console.log(`${studentName} has been enrolled.`);
}

// Function to unenroll a student
function unenrollStudent(subjectArray) {
    displayEnrolledStudents(subjectArray);
    const studentName = prompt("Enter the name of the student to unenroll:");
    const indexToRemove = subjectArray.indexOf(studentName);
    
    if (indexToRemove !== -1) {
        subjectArray.splice(indexToRemove, 1); // Remove the student by index
        console.log(`${studentName} has been unenrolled.`);
    } else {
        console.log(`${studentName} is not found in the list.`);
    }
}

// Main program function
function main() {
    const subjects = {
        A: DSA,
        B: PL,
        C: Networks
    };

    while (true) {
        const subjectChoice = prompt("Select a subject to enroll a student:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();

        if (subjectChoice === 'D') {
            // Exit the program and display all enrolled students
            console.log("Final enrollment status:");
            console.log("DSA:", DSA);
            console.log("PL:", PL);
            console.log("Networks:", Networks);
            break;
        }

        if (!subjects[subjectChoice]) {
            console.log("Invalid choice, please select A, B, C, or D.");
            continue;
        }

        while (true) {
            const operationChoice = prompt("Select an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit").toUpperCase();

            switch (operationChoice) {
                case 'A':
                    enrollStudent(subjects[subjectChoice]);
                    break;
                case 'B':
                    unenrollStudent(subjects[subjectChoice]);
                    break;
                case 'C':
                    break; // Go back to subject selection
                case 'D':
                    // Exit the program and display all enrolled students
                    console.log("Final enrollment status:");
                    console.log("DSA:", DSA);
                    console.log("PL:", PL);
                    console.log("Networks:", Networks);
                    return;
                default:
                    console.log("Invalid operation choice. Please select A, B, C, or D.");
            }

            if (operationChoice === 'C') break; // Exit operation loop and return to subject selection
        }
    }
}

// Start the program
main();
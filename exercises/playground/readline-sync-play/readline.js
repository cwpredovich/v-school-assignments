var readline = require("readline-sync");

// .question
// keyInYN

// .keyInSelect

if (readline.keyInYN("Are you hungry?")) {
    console.log("Let's get sushi!");
} else {
    console.log("Let's get drinks!");
}
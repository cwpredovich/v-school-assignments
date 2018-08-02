var ask = require('readline-sync');

// name, age, fav color, etc

var firstName = ask.question("What is your first name? ");
console.log(firstName.toUpperCase());

var firstNameLength = firstName.length;
console.log(`Your first name has ${firstNameLength} letters.`)

var lastName = ask.question("What is your last name? ");
console.log(`Your full name is ${firstName} ${lastName}.`);

var longStory = ask.question(`${firstName}, tell me a story about an embarrassing moment in your life. `);
var halfStory = Math.floor(longStory.length / 2);;
var shortStory = longStory.slice(halfStory)

console.log(`That was a long story, ${firstName}. I only remember the last half: \n ${shortStory}`)

var userShortenedStory = ask.question("At what index should I start the story? ")
console.log(longStory.slice(userShortenedStory));

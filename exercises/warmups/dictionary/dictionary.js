// For this warmup, I need to create a function that stores words and definitions in an object
// I'll start by declaring the object
var dictionary = {};
// Next, I'll declare the function
function addEntry(book, word, definition) {
    // I need to set up the function so that if the word is ALREADY in the dictionary,
    // then we will not add it to the dictionary AGAIN!
    // Once you use the If statement, there are two methods for finishing:
        // Method 1:  if(object.hasOwnProperty(word))   --> this means if the dictionary DOES contain the given word...
        // Method 2:  if(!object[word])  --> this means if the dictionary DOES NOT contain the given word... ! just means not
    if (book[word]) {
        console.log(`${word} is already in the dictionary`);
    } else {
        book[word] = definition;
        console.log(`${word} has been added to the dictionary`)
    }
}

addEntry(dictionary, "sushi", "food item consisting of rice and fish and other things");
addEntry(dictionary, "chair", "comfortable to sit on");
addEntry(dictionary, "sushi", "don't knock it til you try it");


// console.log(dictionary)

// // Next I am going to write a function that looks up a definition given a word

function lookItUp(searchWord){
    // provided the searchWord, I want this function to return the definition
    // from the dictionary object
    console.log(dictionary[searchWord])
}

lookItUp(sushi)
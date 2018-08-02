var ask = require('readline-sync');

var phrase = ask.question("Enter a phrase you would like to encrypt: ");
var shift = ask.questionInt("How many letters would you like to shift the alphabet? ");

function ceasarCipher(str, num) {
    //Declare empyt string to build
    var encrypted = "";
    // Declare a var that holds the original whole alphabet
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Loop/Iterate through the given phrase
    for (var i = 0; i < str.length; i++){
        if (alphabet.indexOf(str[i]) !== -1) {
            var currentIndex = alphabet.indexOf(str[i]);
            encrypted += alphabet[(currentIndex + shift) % 26]
        } else {
            encrypted += str[i]
        }
        
    }
    return encrypted;
}

console.log(ceasarCipher(phrase, shift));
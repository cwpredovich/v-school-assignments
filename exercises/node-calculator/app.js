var calc = require("readline-sync");


// functions!
function add (number1, number2) {
    return Number(number1) + Number(number2);
}

function sub (number1, number2) {
    return Number(number1) - Number(number2);
}

function mul (number1, number2) {
    return Number(number1) * Number(number2);
}

function div (number1, number2) {
    return Number(number1) / Number(number2);
}
// end of functions


console.log("Welcome to Node Calc!");
console.log("Node Calc takes two numbers and allows you to add, subtract, multiply, or divide!");

var num1 = calc.question("Please enter your first number: ");
var num2 = calc.question("Please enter your second number: ");
var operation = calc.question("Please enter the operation to perform: add, sub, mul, or div: ");

switch (operation) {
    case "add":
        console.log(`The result is: ${add(num1, num2)}`);
        break;
    case "subtract":
        console.log(`The result is: ${sub(num1, num2)}`);
        break;
    case "mul":
        console.log(`The result is: ${mul(num1, num2)}`);
        break;
    case "div":
        console.log(`The result is: ${div(num1, num2)}`);
        break;
    default:
        console.log("Please rerun the app and enter an acceptable command.")
}

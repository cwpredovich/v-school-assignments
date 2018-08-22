// Create a function that accepts two numbers and returns the sum
const addTwoNums = (num1, num2) => num1 + num2
console.log(addTwoNums(32, 7));

// Create a function that accepts three numbers and returns the largest of those numbers
const findLargestNum = (num1, num2, num3) => {
    return Math.max(num1, num2, num3)
}
console.log(findLargestNum(1, 3, 5))

// Write a function that accepts one number and returns whether that number is even or odd
const evenOrOdd = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
console.log(evenOrOdd(246))

// Write a funciton that aceepts a string.
// If the length of the string is less than or equal to
// 20 characters long, return string + string
// If the string is more than 20 characters long,
// return the first half of the string

const manipulateStr = (str) => {
    if (str.length <= 20) {
        return str.concat(str)
    } else {
        return (str.slice(0, (str.length / 2)))
    }
}
console.log(manipulateStr("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."))

// Write a function that accepts a number 'n' as a parameter, then prints the first 'n' Fibonacci numbers and return their sum
const getFibonacci = (n) => {
    var sequenceSection = []
    for (let i = 0; i < n; i++) {
        if (i === 0 || i === 1) {
            sequenceSection.push(i);
        } else {
            sequenceSection.push(sequenceSection[i-1] + sequenceSection[i-2])
        }
    }
    console.log(`The first ${n} terms of the Fibonacci sequence are ${sequenceSection}.`)
    // find a way to add all of the items in the array together
    // perhaps .reduce() will help
    console.log("The sum of these terms is " + sequenceSection.reduce(function(total, num){
            return total + num
    }) + ".")
    
}

getFibonacci(7)


// Write a function which solves the quadratic equation
// take 



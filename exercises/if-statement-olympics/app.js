if (5 > 3) {
    console.log("is greater than")
}

var str = "cat";
if (str.length === 3) {
    console.log("is the length")
}

var str2 = "dog";
if (str !== str2) {
    console.log("not the same")
}

var person = {
    name: "Bobby",
    age: 12
}

if (person.age >= 18) {
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is not allowed to go to the movie.")
}

if (person.name[0] !== "B") {
    console.log(person.name + " is not allowed to go to the movie.")
}

if (person.name[0] !== "B" && person.age >= 18) {
    console.log(person.name + " is not allowed to go to the movie.")
}

if (1 === "1") {
    console.log("strict")
} else if (1 == "1") {
    console.log("loose, aka abstract")
} else {
    console.log("not equal at all")
}

if ((1 <= 2 && 2 === 4) || ((3 * 4) >= 10) && (5 + 10) > 10) {
    console.log("yes")
}

var str = "dog";
if (typeof str === "string") {
    console.log("true")
}

if (typeof "true" === "boolean") {
    console.log("it is a boolean")
} else {
    console.log("is not a boolean")
}

var newVariable;

if (typeof newVariable === undefined) {
    console.log("yes, newVariable has been defined")
} else {
    console.log("no, newVariable has not been defined")
}

if ("b" > 0) {
    console.log("yes")
} else {
    console.log("no")
}

var num1 = 26;
(num1 % 2 === 0) 
    ? console.log("The given number is even") 
    : console.log("The given number is odd");

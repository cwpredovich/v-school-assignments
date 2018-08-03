// https://coursework.vschool.io/array-map-exercises/

function doubleNumbers(arr){
    return arr.map(function(num){
        return num *2;
    })
}

console.log(doubleNumbers([2, 5, 100]));

function stringItUp(arr){
    return arr.map(function(num) {
        return num.toString();
    })
}

console.log(stringItUp([2, 5, 100]));

function capitalizeNames(arr){
    return arr.map(function(name){
        // select the first letter => uppercase
        // slice everything else => lowercase
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]))


function namesOnly(arr){
    return arr.map(function(obj){
        return obj.name
    })
}
console.log(namesOnly([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function makeStrings(arr){
    return arr.map(function(obj){
        if (obj.age > 18) {
            return `${obj.name} can go to The Matrix`
        } else {
            return `${obj.name} is under age!! `  
        }
    })
}
console.log(makeStrings([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

function readyToPutInTheDOM(arr){
    return arr.map(function(obj){
        return `<h1>${obj.name}</h1<h2>${obj.age}</h2>`;
    })
}

console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]))
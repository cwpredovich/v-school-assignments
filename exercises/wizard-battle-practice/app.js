var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]

wizards.forEach(function(name){
    console.log(name);
})

var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermione Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]

function gimmeYourName(arr){
    arr.forEach(function(obj){
    console.log(obj.name);
    }
)}

gimmeYourName(wizards);

wizards.forEach(function(obj){
    obj.isAlive = true;
})

console.log(wizards)

// I used the .filter method to loop through the wizards array and copy all the 'neutral good' wizards to their own array
var neutralWizards = wizards.filter(function(obj){
    if (obj.alignment === "neutral good"){
        return obj;
    }
})

console.log(neutralWizards);

console.log(wizards.findIndex(function(obj){
    return obj.alignment === "lawful good"
}))

console.log(wizards.every(function(obj){
    return obj.isAlive === true;
}))

console.log(wizards.some(function(obj){
    return obj.alignment === "neutral good";
}))

function killWizards(arr){
    return arr.forEach(function(obj){
        if (obj.alignment === "neutral good"){
            obj.isAlive = false;
        }
    })
}
killWizards(wizards);
console.log(wizards);

console.log(wizards.every(function(obj){
    return obj.isAlive === true;
}))

console.log(wizards.some(function(obj){
    return obj.isAlive === true;
}))
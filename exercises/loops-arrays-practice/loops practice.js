// this will loop through the officeItems array, count how many computers there are, and then print the running count.
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
var count = 0;
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        count++;
        console.log("There are " + count + " computers.");
    }
}

// this will loop through the array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.");
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.");
        }
}

// This will count up the number of light switch "clicks" in the array, and then notify you if the light is on or off.
var toggle1 = [2, 5, 435, 4, 3];
var toggle2 = [1, 1, 1, 1, 3];
var toggle3 = [9, 3, 4, 2];

// 1 click is on, 2 is off, 3 is on, 4 is off
function lightSwitch(arr) {
    var numberOfClicks = 0;
    for (i = 0; i < arr.length; i++) {
        numberOfClicks += arr[i];
    }
    if ((numberOfClicks % 2) === 0) {
        console.log("After toggling the light switch " + numberOfClicks + " times, the light is off.");
    } else {
        console.log("After toggling the light switch " + numberOfClicks + " times, the light is on.");
    }
}

lightSwitch(toggle1);
lightSwitch(toggle2);
lightSwitch(toggle3);




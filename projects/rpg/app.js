// GAME START
    // Greeting

    // Save player's name

    // Walking
        // w to walk
        // .25 % chance of being attacked

    // If attacked while walking    
        // Different types of enemies: one chosen at random

        // Choose to ATTACK or RUN
            // if attacking, random attack damage amount
            // if running, 50% chance of escaping

            // enemy attacks back with random attack power/damage

            // kill enemy and receive award

            // or player dies
    
    // Inventory
        // awarded items after killing enemies
        // if the user enters Print in the console, the consle will print the player's name, HP, and each item in their inventory

// MY PLAN FOR THE GAME:
var readyUp = require('readline-sync');
// TITLE:  SLC PUNK!
// premise:  you just moved to SLC and have to dodge bums, bad drivers, Mormon missionaries, and girls named Mckenzie

// INTRO: `It's Summer 1985. You just finished your junior year of high school in Oakland, CA when your parents decide to pick up and move everyone to Utah. Really, Utah??!! Yep! Back in the Bay your homies were down, the girlies were fine, you could get anywhere on BART, and Sundays were chill days not church days. Utah is going to be a very different beast...`

// set up player info in an object
    // include inventory as a property
    // include a function for printing inventory
var player = {
    name: '',
    health: 100,
    isAlive: true,
    inventory: ['backpack', 'shiv'],
    printInventory: function () {
        console.log(`Name: ${this.name}, Health: ${this.health}, Inventory: ${this.inventory}.`);
    }
}

// set up enemies' info in objects

function Enemy (type, health, strength, battleCry, primaryAttack, secondaryAttack, demise, gloat) {
    this.type = type;
    this.health = health;
    this.strength = strength;
    this.battleCry = battleCry;
    this.primaryAttack = primaryAttack;
    this.secondaryAttack = secondaryAttack;
    this.demise = demise;
    this.gloat = gloat;
}

var lunaticBum = new Enemy('Lunatic Bum', 45, 35, 'spare change?', 'shouts curse words at you', 'stabs you with dirty needle', "I'm dying but I don't care. I'll come back as a shopping cart and haunt you forever!", "HA HA HA HA HAAA! I told you Operah is the President and she sent you to kill me, but you can't kill me because I ate a gopher once!");

var missionaries = new Enemy('Mormon Missionaries', 50, 60, 'Hi! Have you heard of the LDS church?', 'sings choir songs to you', 'shows up late to dinner at your house', "We'll just leave you for the next set of Elders to serve here", "Ready to get baptized?");

var mckenzies = new Enemy('Mckenzie', 75, 100, 'Wanna get married??', 'slaps you', 'gets pregnant and refuses a paternity test', 'but our Tinder profiles had so much in common!', "Hold on, let me take a selfie!");
console.log(`-=-=-=-=-=-= SLC PUNK! =-=-=-=-=-=-`);
var storyline = readyUp.question("\n \nPress Enter to Start Game\n");
console.log(`INTRO:  It's Summer 1985. You just finished your junior year of high school in Oakland, CA when your parents decide to pick up and move everyone to Utah. Really, Utah??!! Yep! Back in the Bay your homies were down, the girlies were fine, you could get anywhere on BART, and Sundays were chill days not church days. Utah is going to be a very different beast...`)
if (readyUp.keyInYN("Are you ready? ")) {
    console.log("Day 1...");
    } else {
    player.health = 0;
    }



while (player.health > 0) {
    //console.clear();
    
}
// ENEMIES:
    // Bums
        //
    // Bad Drivers
        //
    // Mormon missionaries
        //
    // Mckenzies
        //


// write functions for walking, attacking, running

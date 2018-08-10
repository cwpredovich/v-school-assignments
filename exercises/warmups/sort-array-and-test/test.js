var chai = require("chai");
var myData = require('./sort-array.js');
var assert = chai.assert;
var peopleArray = myData.peopleArray;
var sortedOfAge = myData.sortedOfAge;
var over18 = myData.over18;

describe("Create a function that returns an array of poeple older than 18", function(){
    it("returns an array of only people older than 18", function(){
        assert.deepEqual(sortedOfAge(peopleArray), over18)
    })
})


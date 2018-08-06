var appJS = require('./app.js')
var addS = appJS.addS
var chai = require('chai');
var myFunctions = require('./app.js');
console.dir(chai);
var assert = chai.assert;

//    describe,   it    //

describe("", function(){
    it("should end with an s", function(){
        assert.deepEqual(addS(['dog', 'cat', 'unicorn']), ['dogs', 'cats', 'unicorns'])
    })
    it("should not allow numbers into the array", function(){
        assert.equal(addS(['dog', 0, 3]), 'no numbers')
    })
    it("should not have more than one 's' at the end", function(){
        assert.deepEqual(addS(['dogs', 'cats', 'frogs']), ['dogs', 'cats', 'frogs'])
    })
})
// In this warmup, I need to sort the peopleArray first by age, 
// and then sort by last name.
// and then return each name and age in <li> tags

var peopleArray = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },
    {
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },
    {
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },
    {
      firstName: "Morty",
      lastName: "Smith",
      age: 29
    },
    {
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    },
    {
      firstName: "Pasha",
      lastName: "Datsyuk",
      age: 13
    },
    {
      firstName: "Lev",
      lastName: "Tolstoy",
      age: 82
    }
  ];

  var over18 = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    },
  ]


// declare a function
function sortedOfAge(arr){
    // choose an array method to return only those older than 18
    return peopleArray.filter(function(person){
        return person.age >= 18;
    })
}

// console.log(sortedOfAge(peopleArray))

module.exports = {
    peopleArray: peopleArray,
    over18: over18,
    sortedOfAge: sortedOfAge,
}
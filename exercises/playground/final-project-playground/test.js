const fakeDB = [
    {
        title: "this title",
        body: "this body",
        id: 121
    },
    {
        title: 'that title',
        body: 'that body',
        id: 313
    }
]

let foundObj = fakeDB.find(function (obj) {return obj.id === 313 });

console.log(foundObj)
const redux = require('redux');

// Inital State
const state = {
    contacts: []
}

// state.contacts will be an array of objects
// Each object will contain a person's name, phone number, and email address

// IARSSD

// Actions
function newContact(name, email, phone, id) {
    return {
        type: "NEW_CONTACT",
        data: {
            name: name,
            email: email,
            phone: phone,
            id: id
        }
    }
}

function deleteContact(name) {
    return {
        type: "DELETE_CONTACT",
        name: name
    }
}

// Reducer
function reducer(prevState = state, action) {
    switch(action.type) {
        case "NEW_CONTACT":
            return {
                contacts: [...prevState.contacts, action.data]
            };
        case "DELETE_CONTACT":
            return {
                contacts: prevState.contacts.filter(person => person.name !== action.name)
                        // person.name is each contact's name
                        // action.name is the name of the contact to delete, aka the undesirable
                        // check each contact. Return all contacts whose names DO NOT match the undesirable
                
                        // THIS IS HOW THE ABOVE CODE WORKS
                        // The .filter() method is the main player
                        // Tell the method to go through the array of contacts
                        // Tell the method to what to consider each element in the array
                            // In this case, we call each element a "person"
                        // Any time we use this method, it returns a new array of elements
                            // The new array will only hold elements that pass our test
                        // So at this point we get to set up this test
                        // We want to eliminate just the contact whose "name" we pass in
                            // This is a little bit complicated. We gave every contact a name in the newContact action creator.
                            // Therefore, we can simply filter out any "person.name" that matches the name we want to delete.
                            // But .filter doesn't delete. Instead it returns a new array. So we'll just return a new array without the undesirable contact
                            // We'll need to be able to pass an undesirable name into our deleteContact function which will then come down to our reducer and filter method.
                            // This is the name of the contact that will be filtered out.
            }
        default:
           return prevState;
    }
}

// Store
const store = redux.createStore(reducer);

// Subscribe
store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch

store.dispatch(newContact("Chris", "cp@this.com", "888-777-5555", 1));
store.dispatch(newContact("Jason", "BaconMonster@nocholesterol.com", "1-800-EAT-MEAT", 2));


store.dispatch(deleteContact("Chris"))
store.dispatch(deleteContact("Jason"))



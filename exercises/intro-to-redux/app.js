const redux = require('redux');

// REDUX

// Initial state
const state = {
    count: 0
}

// ACTIONS - Action Creators //
    // Actions return objects
function addOne(){
    // It returns what is called an action object
    return {
        // The action object always holds a type. The type must be in 'screaming snake' case = caps with underscores
        type: "ADD_ONE"
    }
}

function subtractOne(){
    return {
        type: "SUBTRACT_ONE"
    }
}

function forceNewCount(newNumber){
    return {
        type: "FORCE_NEW_COUNT",
        newNumber: newNumber
    }
}

function concat(concatVar){
    return {
        type: "CONCAT",
        addOn: concatVar
    }
}

// REDUCER - 
function reducer (prevState = state, action){
    // What should be updated and how to do it appropriately
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUBTRACT_ONE":
            return {
                count: prevState.count - 1
            }
        case "FORCE_NEW_COUNT":
            return {
                count: action.newNumber
            }
        case "CONCAT":
            return {
                count: Number(`${prevState.count}${action.addOn}`)
            }
        default :
            return prevState
    }
}

const store = redux.createStore(reducer)
/* Q: What does the store do? */


store.subscribe(function(){
    console.log(store.getState())
})

store.dispatch(addOne())
store.dispatch(addOne())
store.dispatch(subtractOne())
store.dispatch(subtractOne())
store.dispatch(forceNewCount(21))
store.dispatch(concat(4700))
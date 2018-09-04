const redux = require('redux');

// The acronym for the instructions is I.A.R.S.D., aka "I Am Really Super Smart, Dude"
// Initial state
// Actions
// Reducer
// Store
// Subscribe
// Dispatch


// 1.  Initial state
    const state = {
        count: 0
    };


// 2.  Actions
        // What actions actions do I want to add? These are functions that return objects.
        // The objects will each have a property of 'type'
        // The value of 'type' will correspond with a case in the Reducer section
        // The type must be in the 'screaming snake case', not 'camel case'.
        // Any action that takes arguments must have a property for that too
        // Actions work very closely with the Reducer switch (and it's cases).
    
        // I want to add, subtract, multiply, and divide the count
        // I also want to reset the count
    function addOne(){
        return {
            type: 'ADD_ONE'
        }
    }

    function subtractOne(){
        return {
            type: 'SUBTRACT_ONE'
        }
    }

    function multiplyBy(num){
        return {
            type: 'MULTIPLY_BY',
            num: num
        }
    }
    
    function divideBy(num){
        return{
            type: 'DIVIDE_BY',
            num: num
        }
    }
    
    function resetCount(){
        return{
            type: 'RESET_COUNT',
        }
    }



// 3.  Reducer
    // The reducer function takes two arguments:  state and action
    // We can't just add and subtract from state, so we use prevState to refer to the value of the variable state. The reason we can't change state directly is unclear, but it is a rule.
    // That said, the reducer uses if/else if/else in the form of a switch statement
    // The reducer holds all of the code blocks to run in the case of each action, depending on which action will be dispatched in a later step

    function reducer(prevState = state, action){
        switch (action.type){
            case "ADD_ONE":
                return {
                    count: prevState + 1
                }
            case "SUBTRACT_ONE":
                return {
                    count: prevState - 1
                }
            case "MULTIPLY_BY":
                return {
                    count: prevState * action.type.num
                }
            case "DIVIDE_BY":
                return {
                    count: prevState / action.type.num
                }
            case "COUNT_RESET":
                return state;
            default:
                return prevState
        }
    }


// 4.  Store
    // Store is a variable we create, much like state. In just one line, we create the store and connect it to the reducer switchboard.
    const store = redux.createStore(reducer);

// 5.  Subscribe
    store.subscribe(function(){
        // whatever I want to have happen whenever the page dispatches actions
        console.log(store.getState())
    })



// 6.  Dispatch
    // This is basically where we tell the app to execute actions.
    store.dispatch(addOne());
    store.dispatch(subtractOne());
    store.dispatch(multiplyBy(2));
    store.dispatch(divideBy(4));
    store.dispatch(resetCount());

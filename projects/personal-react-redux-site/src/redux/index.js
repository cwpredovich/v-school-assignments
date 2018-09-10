import thunk from 'redux-thunk';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';

const initState = {
    quote: []
};

export const getQuote = (userInput) => {
    return dispatch => {
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${userInput}&apikey=5SB5J0LHLQVK90HL`).then(response => {
            dispatch({
                type: "GET_QUOTE",
                quote: response.data
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "GET_QUOTE":
            return {
                quote: action.quote
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk));

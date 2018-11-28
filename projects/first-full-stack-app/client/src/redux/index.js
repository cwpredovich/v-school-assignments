import thunk from 'redux-thunk';
import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';

const stocksURL = "http://localhost:5000/stocks/";

const initState = {
    quote: [],
    stockPortfolio: []
};

export const getPortfolio = () => {
    console.log("Hey look! I executed the function 'getPortfolio'!")
    return function(dispatch) {
        axios.get(stocksURL)
            .then(response => {
                dispatch({
                    type: "GET_PORTFOLIO",
                    stockPortfolio: response.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

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
        case "GET_PORTFOLIO":
            return {
                quote: prevState.quote,
                stockPortfolio: [...action.stockPortfolio]
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk));

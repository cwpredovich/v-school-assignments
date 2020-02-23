/// COMPONENTS ///

    // 3 Rows of Components:

        // Row 1:  Aggregates
            //   a. Total Assets
            //   b. 

        // Row 2:  Tools
            //   a. Search
            //   b. Trade:  Buy or Sell
            //   d. Portfolio

        // Row 3:  Favorite Stocks
import React, { Component } from "react";

import Aggregates from "./Aggregates";
import Tools from "./Tools";
import FavoriteStocks from "./FavoriteStocks";
import axios from "axios";
import { API_KEY } from "../Keys";

class BuySell2 extends Component {
    constructor() {
        super();
        this.state = {
            currentQuote: {}
        }
    };

    handleClick = clickedSymbol => {
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${clickedSymbol}&apikey=${API_KEY}`).then(response => {
           this.setState({
               currentQuote: response.data["Global Quote"]
           }) 
        })
        console.log("Clicked", clickedSymbol);
    };

    render() {
        console.log(this.state.currentQuote);
        return(
            <div className="buySellPage">
                <Aggregates />
                <Tools />
                <FavoriteStocks handleClick={this.handleClick} />
            </div>
        )
    };
};

export default BuySell2
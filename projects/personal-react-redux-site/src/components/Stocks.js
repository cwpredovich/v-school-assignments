import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getQuote } from '../redux';
import {API_KEY} from '../Keys';

class Stocks extends Component {

    constructor(){
        super()
        this.state = {
            symbol: "",
            currentQuote: {}
        }
    }

        componentDidMount(){
            this.props.getQuote()
        }

    handleChange = (e) => {
        // update state
        // the symbol part
        // on each letter press
        this.setState(
            {symbol: e.target.value}
        )
    }

    handleSearchStock = (e) => {
        e.preventDefault();
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.symbol}&apikey=${API_KEY}`).then(response => {
            this.setState({
                currentQuote: response.data["Global Quote"]
                // because the object's key has a space between
                // Global and Quote
                // we have to index the object with slightly different syntax
            })
        })
        this.setState({
            symbol: ""
        })
    }

    handleClick = clickedSymbol => {
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${clickedSymbol}&apikey=${API_KEY}`).then(response => {
            this.setState({
                currentQuote: response.data["Global Quote"]
                // because the object's key has a space between
                // Global and Quote
                // we have to index the object with slightly different syntax
            })
        })
        this.setState({
            symbol: ""
        })
    }

    render(){
        console.log(this.state)
        return (
            <div className="stocksPage">
                <div className="stocksPageContent">

                    <h1>Stock Seeker</h1>
                    <p>Use this form to get information about companies listed on the New York Stock Exchange.</p>
                    <form onSubmit={this.handleSearchStock}>
                        <input type="text" placeholder="Stock Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange} />
                        <button>Get Info</button>
                    </form>
                    <div className="favStocksAndDisplayStocks">
                        <div className="favStocks">
                            <h2>Favorite Stocks:</h2>
                                <ol>
                                    <li onClick={()=> this.handleClick("ADBE")}>Adobe (ADBE)</li>
                                    <li onClick={()=> this.handleClick("CHY")}>Calamos Convertible (CHY)</li>
                                    <li onClick={()=> this.handleClick("BAH")}>Booz Allen Hamilton 
                                    (BAH)</li>
                                    <li onClick={()=> this.handleClick("VOOG")}>Vanguard ETF (VOOG)</li>
                                    <li onClick={()=> this.handleClick("AAPL")}>Apple (AAPL)</li>
                                    <li onClick={()=> this.handleClick("AMZN")}>Amazon (AMZN)</li>
                                    <li onClick={()=> this.handleClick("DIS")}>Disney (DIS)</li>
                                    <li onClick={()=> this.handleClick("PYPL")}>Paypal (PYPL)</li>
                                    <li onClick={()=> this.handleClick("FB")}>Facebook (FB)</li>
                                    <li onClick={()=> this.handleClick("NFLX")}>Netflix (NFLX)</li>
                                </ol>
                        </div>
                        <div className="displayStocks">
                            <h2>Symbol: {this.state.currentQuote["01. symbol"]}</h2>
                            <h4>Price: ${this.state.currentQuote["05. price"]}</h4>
                            <h4>Latest Trading Day: {this.state.currentQuote["07. latest trading day"]}</h4>
                            <h4>High: {this.state.currentQuote["03. high"]}</h4>
                            <h4>Low: {this.state.currentQuote["04. low"]}</h4>
                            <h4>Percent Change: {this.state.currentQuote["10. change percent"]}</h4>
                        </div>

                    </div>
                </div>
            </div>
        )


    }
}





export default connect(state => state, {getQuote})(Stocks);
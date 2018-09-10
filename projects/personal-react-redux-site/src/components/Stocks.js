import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getQuote } from '../redux';

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
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.state.symbol}&apikey=5SB5J0LHLQVK90HL`).then(response => {
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
                <h1>Stock Quotes</h1>
                <p>Use this form to get information about companies listed on the New York Stock Exchange.</p>
                <p></p>
                <form onSubmit={this.handleSearchStock}>
                    <input type="text" placeholder="Stock Symbol" name="symbol" value={this.state.symbol} onChange={this.handleChange} />
                    <button>Get Info</button>
                </form>
                <h2>Symbol: {this.state.currentQuote["01. symbol"]}</h2>
                <h4>Price: ${this.state.currentQuote["05. price"]}</h4>
                <h4>Latest Trading Day: {this.state.currentQuote["07. latest trading day"]}</h4>
                <h4>High: {this.state.currentQuote["03. high"]}</h4>
                <h4>Low: {this.state.currentQuote["04. low"]}</h4>
                <h4>Percent Change: {this.state.currentQuote["10. change percent"]}</h4>

                
            </div>
        )


    }
}





export default connect(state => state, {getQuote})(Stocks);
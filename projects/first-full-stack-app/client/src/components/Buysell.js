import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getQuote, getPortfolio } from '../redux';
import {API_KEY} from '../Keys';
import Portfolio from './Portfolio';
const stocksURL = "http://localhost:5000/stocks/";

class Buysell extends Component {

    constructor(){
        super()
        this.state = {
            symbol: "",
            currentQuote: {},
            quantity: "",
            portfolio: []
        }
    }

    componentDidMount(){
        this.loadPortfolio()
    }

    loadPortfolio = () => {
        axios.get(stocksURL)
            .then(response => {
                this.setState({
                    portfolio: response.data,
                    quantity: ""
            })
        })
        console.log(`Here is the current portfolio`)
        console.log(this.state.portfolio)
    }

    handleSymbolChange = (e) => {
        this.setState(
            {symbol: e.target.value}
        )
    }

    handleQuantityChange = (e) => {
        this.setState(
            {quantity: e.target.value}
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
        // this.setState({
        //     symbol: ""
        // })
        console.log(this.state)
    }

    handleBuy = () => {
        // IF I already own shares of this stock
        if (this.state.portfolio.find(obj => obj.symbol === this.state.currentQuote["01. symbol"])) {
            console.log(`You are trying to buy ${this.state.quantity} more shares of ${this.state.currentQuote["01. symbol"]}`)
            // THEN find it in my portfolio
            const stockToRepurchaseObj = this.state.portfolio.find(obj => obj.symbol === this.state.currentQuote["01. symbol"])
            // grab the stocks _id
            const stockIdToRepurchase = stockToRepurchaseObj._id
            // find out how many I already own
            const prevNumOfShares = stockToRepurchaseObj.numberOfShares
            // add how many shares I want to buy to how many I already own
            const newNumOfShares = ((Number(prevNumOfShares) + Number(this.state.quantity))).toString()
            axios.put(`${stocksURL}${stockIdToRepurchase}`, {
                numberOfShares: newNumOfShares
            })
                .then(response => {
                    this.loadPortfolio()
                    console.log(response.data)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            axios.post(stocksURL, 
                {symbol: `${this.state.currentQuote["01. symbol"]}`,
                numberOfShares: `${this.state.quantity}`,
                averageCost: `${this.state.currentQuote["05. price"]}`
            })
            .then(response => {
                this.loadPortfolio();
                console.log(response.data)
            })
            console.log(this.state.portfolio)

        }
    }
    
    // handleSell = () => {}

    handleSellAll = () => {
        axios.delete(`${stocksURL}${this.state.portfolio.find(obj => obj.symbol === this.state.currentQuote["01. symbol"])._id}`)
            .then(response => {
                this.loadPortfolio();
                console.log(response)
            })
        console.log(this.state.portfolio)
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
    }

    render(){
        return (
            <div className="stocksPage">
                <div className="stocksPageContent">

                    <h1 className="buySellPageTitle">Buy Low, Sell High, and Keep the Difference.</h1>
                    <form onSubmit={this.handleSearchStock}>
                        <input type="text" placeholder="Stock Symbol" name="symbol" value={this.state.symbol} onChange={this.handleSymbolChange} />
                        <button>Get Info</button>
                    </form>
                    <div className="favStocksAndDisplayStocks">
                        <div className="favStocks">
                            <div className="favStocksHeader">Favorite Stocks</div>
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
                        <div className="displayAndTradeStocks">
                            <h2>Symbol: {this.state.currentQuote["01. symbol"]}</h2>
                            
                            <h4>Price: ${this.state.currentQuote["05. price"]}</h4>

                            <form className="buyOrSellStocks">
                                <input type="number" placeholder="Quantity" name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange} />
                            </form>
                            <button onClick={this.handleBuy}>Buy</button>
                            <button onClick={this.handleSell}>Sell</button>
                            <button onClick={this.handleSellAll}>Sell All of This Stock</button>

                            <h4>Latest Trading Day: {this.state.currentQuote["07. latest trading day"]}</h4>
                            <h4>High: {this.state.currentQuote["03. high"]}</h4>
                            <h4>Low: {this.state.currentQuote["04. low"]}</h4>
                            <h4>Percent Change: {this.state.currentQuote["10. change percent"]}</h4>
                        </div>
                        <div className="purchases">
                            <Portfolio {...this.state} />
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default connect(state => state, {getQuote, getPortfolio})(Buysell);
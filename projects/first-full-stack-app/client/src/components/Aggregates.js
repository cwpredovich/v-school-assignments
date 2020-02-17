import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getQuote, getPortfolio } from '../redux';
// import { API_KEY } from '../Keys';
// import Portfolio from './Portfolio';
const stocksURL = "http://localhost:5000/stocks/";

// class Aggregates extends Component {
//     constructor(){
//         super()
//         this.state = {
//             totalAssets: "",
//             largestHolding: "",
//             portfolioDiversity: "",
//             totalReturn: "",
//             portfolio: []
//         }
//     }

//     componentDidMount(){
//         this.loadPortfolio()
//     }

//     loadPortfolio = () => {
//         axios.get(stocksURL)
//             .then(response => {
//                 this.setState({
//                     portfolio: response.data
//                 })
//             })
//     }

//     loadAggregates = () => {
        
//     }

//     render(){
//         return (
//             <div className="aggregateDisplay">
//                 <div className="aggregateBoxes totalAssets">
//                     <div className="aggregateTitle">
//                         Total Assets
//                     </div>
//                     <div className="aggregateValue">
//                         $20,000
//                     </div>
//                 </div>
//                 <div className="aggregateBoxes totalBlankDiv1">
//                     <div className="aggregateTitle">
//                         Largest Holding
//                     </div>
//                     <div className="aggregateValue">
//                         AMZN
//                     </div>
//                 </div>
//                 <div className="aggregateBoxes totalBlankDiv2">
//                     <div className="aggregateTitle">
//                         Portfolio Diversity
//                     </div>
//                     <div className="aggregateValue">
//                         75%
//                     </div>
//                 </div>
//                 <div className="aggregateBoxes totalReturn">
//                     <div className="aggregateTitle">
//                         Total Return
//                     </div>
//                     <div className="aggregateValue">
//                         +$5,500
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default connect(state => state, {getQuote, getPortfolio})(Aggregates);

const Aggregates = () => {
    return (
        <div className="aggregateDisplay">
            <div className="aggregateBoxes totalAssets">
                <div className="aggregateTitle">
                    Total Assets
                </div>
                <div className="aggregateValue">
                    $20,000
                </div>
            </div>
            <div className="aggregateBoxes totalBlankDiv1">
                <div className="aggregateTitle">
                    Largest Holding
                </div>
                <div className="aggregateValue">
                    AMZN
                </div>
            </div>
            <div className="aggregateBoxes totalBlankDiv2">
                <div className="aggregateTitle">
                    Portfolio Diversity
                </div>
                <div className="aggregateValue">
                    75%
                </div>
            </div>
            <div className="aggregateBoxes totalReturn">
                <div className="aggregateTitle">
                    Total Return
                </div>
                <div className="aggregateValue">
                    +$5,500
                </div>
            </div>
        </div>
    )
}

export default Aggregates
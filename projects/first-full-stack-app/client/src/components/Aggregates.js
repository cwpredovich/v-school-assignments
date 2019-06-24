import React from 'react';

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
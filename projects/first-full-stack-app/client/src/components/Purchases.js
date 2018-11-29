import React from "react";

const Purchases = (props) => {
    return(
        <div>
            <h2>Purchases:</h2>
            <ol>
            {props.portfolio.map(company => 
                <li>
                    <ul>
                        <li>Company Symbol: {company.symbol}</li>
                        <li># of Share Purchased: {company.numberOfShares}</li>
                        <li>Purchase Price: {company.averageCost}</li>
                    </ul>
                </li>
            )}
            </ol>
        </div>
    )
}

export default Purchases;
import React from "react";

const Portfolio = (props) => {
    return(
        <div>
            <h2>Portfolio:</h2>
            <ol>
            {props.portfolio.map(company => 
                <li>
                    <ul>
                        <li>Company Symbol: {company.symbol}</li>
                        <li># of Share Purchased: {company.numberOfShares}</li>
                        <li>Average Price: {company.averageCost}</li>
                    </ul>
                </li>
            )}
            </ol>
        </div>
    )
}

export default Portfolio;
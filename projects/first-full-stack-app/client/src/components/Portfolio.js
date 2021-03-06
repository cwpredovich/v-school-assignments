import React from "react";

const Portfolio = (props) => {
    return(
        <div>
            <h2>Portfolio:</h2>
            <ol>
            {props.portfolio.map((company, index) => 
                <li key={ index }>
                    <ul className="portfolioList">
                        <li className="portfolioItemHeader">Company Symbol: {company.symbol}</li>
                        <li># of Share(s) Purchased: {company.numberOfShares}</li>
                        <li>Average Price: {company.averageCost}</li>
                    </ul>
                </li>
            )}
            </ol>
        </div>
    )
}

export default Portfolio;
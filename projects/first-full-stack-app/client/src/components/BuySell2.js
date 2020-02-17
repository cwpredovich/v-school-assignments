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
import React from "react";

import Aggregates from "./Aggregates";
import Tools from "./Tools";
import FavoriteStocks from "./FavoriteStocks";

const BuySell2 = () => {
    return(
        <div className="buySellPage">
            <Aggregates />
            <Tools />
            <FavoriteStocks />
        </div>
    )
}

export default BuySell2
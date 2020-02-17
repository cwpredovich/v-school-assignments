import React from "react";
import FavStock from "./FavStock";
import favStocksData from "./favStocksData";


const FavoriteStocks = () => {
    const favStockComponents = favStocksData.map(favStock => <FavStock key={favStock.id} name={favStock.name}/>)

    return (
        <ol>
            {favStockComponents}
        </ol>
    )
}

export default FavoriteStocks;
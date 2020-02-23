import React from "react";
import FavStock from "./FavStock";
import favStocksData from "./favStocksData";


const FavoriteStocks = (props) => {

    const favStockComponents = favStocksData.map(favStock => <FavStock key={favStock.id} name={favStock.name} favStock={favStock} handleClick={props.handleClick} />)
    
    return (
        <ol>
            {favStockComponents}
        </ol>
    )
}

export default FavoriteStocks;
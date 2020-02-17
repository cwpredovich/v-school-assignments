import React from "react";
import FavStock from "./FavStock";


const FavoriteStocks = () => {
    const favStocksArr = [
        {symbol: "TMUS", name: "T-Mobile U.S."},
        {symbol: "MSFT", name: "Microsoft"},
        {symbol: "NOC", name: "Northrop Grumman"},
        {symbol: "DIS", name: "Disney"},
        {symbol: "PG", name: "Proctor & Gamble"},
        {symbol: "KO", name: "Coca-Cola"},
        {symbol: "FB", name: "Facebook"},
        {symbol: "AAPL", name: "Apple"},
        {symbol: "AMZN", name: "Amazon"},
        {symbol: "VOOG", name: "Vanguard S&P 500 Growth ETF"}
    ]

    return (
        <ol>
            <FavStock name={favStocksArr[0].name}/>
            <FavStock name={favStocksArr[1].name}/>
            <FavStock name={favStocksArr[2].name}/>
            <FavStock name={favStocksArr[3].name}/>
            <FavStock name={favStocksArr[4].name}/>
            <FavStock name={favStocksArr[5].name}/>
            <FavStock name={favStocksArr[6].name}/>
            <FavStock name={favStocksArr[7].name}/>
            <FavStock name={favStocksArr[8].name}/>
            <FavStock name={favStocksArr[9].name}/>
        </ol>
    )
}

export default FavoriteStocks;
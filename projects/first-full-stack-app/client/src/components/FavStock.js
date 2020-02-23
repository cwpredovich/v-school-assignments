import React from 'react';

const FavStock = (props) => {
    return (
        <li className="favStock" onClick={() => {props.handleClick(props.favStock.symbol)}}>
            {props.name}
        </li>
    )
};

export default FavStock;
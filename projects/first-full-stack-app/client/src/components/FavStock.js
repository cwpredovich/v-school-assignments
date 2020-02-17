import React from 'react';

const FavStock = (props) => {
    return (
        <li className="favStock">
            {props.name}
        </li>
    )
};

export default FavStock;
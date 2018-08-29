import React from 'react';

const Target = (props) => {

    const targetStyle = {
        display: "block",
        height: "200px",
        width: "200px"

    }

    return (
        <div>
            <img src={ props.image } height="200px" width="150px" alt="Target Eliminated"/>
            <p>{ props.name }</p>
        </div>
    )
}

export default Target;
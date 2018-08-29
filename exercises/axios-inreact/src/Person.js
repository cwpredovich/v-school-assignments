import React from 'react';


const Person = (props) => {
    return (
        <div>
            <h3>{ props.name }</h3>
            <p>{ props.height }</p>
            <p>{ props.eye_color }</p>
            <p>{ props.hair_color}</p>
        </div>
    )
}

export default Person;
import React from 'react'

const Friend = (props) => {
    return (
        <div>
            <h1>{ props.name }</h1>
            <h4>{ props.age }</h4>
        </div>
    )
}

export default Friend
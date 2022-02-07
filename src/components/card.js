import React from 'react'
import './../css/card.css'

const card = (props) => {
    return (
        <div className="card">
            <span>{props.icon}</span>
            <h1>{props.text}</h1>
        </div>
    )
}

export default card

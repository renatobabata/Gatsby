import React from "react"
import cardStyle from "./card.module.scss"
const Card = () => {
    return (
        <div className={cardStyle.card}>
            <h1 className={cardStyle.h1}>Title card</h1>
            <p >This is the paragraph for this web page</p>
            <button>Button card</button>
        </div>
    )
}

export default Card
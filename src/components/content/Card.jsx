import React from "react"
import "./Card.css"
export default props => {
    const barClass = 'bar bar-' + props.bar_value
    const roundedImageClass = props.roundedImage ? "roundedImage" : "semiRoundedImage"

    return (
        <div className='card'>
            {props.image != null && <img className={roundedImageClass} src={props.image} />}
            {props.mainLine != null && <h3>{props.mainLine}</h3>}
            {props.secondLine != null && <h3>{props.secondLine}</h3>}
            {props.bar_text != null && <div className="bar-holder">
                <div className={barClass}>{props.bar_text}</div>
            </div>}
        </div>
    )
}
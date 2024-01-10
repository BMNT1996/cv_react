import React from "react"
import "./Card.css"

/**
 * Component used to show cards in the application. It is used in Education, Languages and Couses
 */
export default props => {
    const barClass = 'bar bar-' + props.bar_value
    //Tag used to show a circle image. This is necessary for the Languages component
    const roundedImageClass = props.roundedImage ? "roundedImage" : "semiRoundedImage"

    return (
        <div className='card'>
            {/* Image of the card. It will be showed in the top */}
            {props.image != null && <img className={roundedImageClass} src={props.image} />}
            {/* Fist line, also called as main line of the card */}
            {props.mainLine != null && <h3>{props.mainLine}</h3>}
            {/* Second line of the card, when necessary */}
            {props.secondLine != null && <h3>{props.secondLine}</h3>}
            {/* Bar with some value set in the props variables, to be showed when necessary */}
            {props.bar_text != null && <div className="bar-holder">
                <div className={barClass}>{props.bar_text}</div>
            </div>}
        </div>
    )
}
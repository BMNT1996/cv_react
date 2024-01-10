import React from 'react'
import './CardContainer.css'

/**
 * Component that contains all the properties to hold Cards and display them correctly
 */
export default props =>
    <div className='cardsMain'>
        <h2 className='mainTitle'>{props.title}</h2>
        <hr />
        <div className='cardsContainer'>
            {/* props.children should be the Cards to be displayed */}
            {props.children}
        </div>
    </div>
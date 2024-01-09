import React from 'react'
import Card from './Card'
import './CardContainer.css'

export default props =>
    <div className='cardsMain'>
        <h2 className='mainTitle'>{props.title}</h2>
        <hr />
        <div className='cardsContainer'>
            {props.children}
        </div>
    </div>
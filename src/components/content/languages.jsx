import React from 'react'
import CardContainer from './CardContainer'
import Card from './Card'

/**
 * Component with the learned languages
 */
export default props =>
    <CardContainer title="Languages">
        <Card
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png"
            roundedImage={true}
            mainLine="Portuguese"
            bar_value="5"
            bar_text="Native" />
        <Card
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
            roundedImage={true}
            mainLine="English"
            bar_value="3"
            bar_text="B2" />
    </CardContainer>
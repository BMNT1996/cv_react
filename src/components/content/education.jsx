import React from 'react'
import CardContainer from './CardContainer'
import Card from './Card'

/**
 * Component with my education path
 */
export default props =>
    <CardContainer title="Education">
        {/* Graduation - TCE */}
        <Card
            image="https://www.academic-conferences.org/wp-content/uploads/2019/11/logo-iscte-iul-In-Blue.png"
            mainLine="BSC Telecomunications and Computer Engineering"
            secondLine="2014 - 2017"
            bar_value="14"
            bar_text="Final grade: 14" />
        {/* Master - CE */}
        <Card
            image="https://www.academic-conferences.org/wp-content/uploads/2019/11/logo-iscte-iul-In-Blue.png"
            mainLine="MSC Computer Engineering"
            secondLine="2017 - 2019"
            bar_value="18"
            bar_text="Final grade: 18" />
    </CardContainer>
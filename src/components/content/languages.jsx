import './languages.css'
import React from 'react'

export default props =>
    <div className='languages'>
        <h2 className='mainTitle'>Languages</h2>
        <hr />
        <div className='languageContainer'>
            <div className='languageCard'>
                <img src=
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png"
                    alt="Portugal flag" />
                <h3>Portuguese</h3>
                <div class="bar-holder">
                    <div class="bar bar-5">Native</div>
                </div>
            </div>
            <div className='languageCard'>
                <img src=
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_the_United_Kingdom_%282-3%29.svg/2560px-Flag_of_the_United_Kingdom_%282-3%29.svg.png"
                    alt="UK flag" />
                <h3>English</h3>
                <div class="bar-holder">
                    <div class="bar bar-3">C1</div>
                </div>
            </div>
        </div>
    </div>
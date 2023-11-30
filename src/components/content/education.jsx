import './education.css'
import React from 'react'

export default props =>
    <div className='education'>
        <h2 className='mainTitle'>Education</h2>
        <hr />
        <div className='educationContainer'>
            <div className='educationCard'>
                <img className="universityLogo" src=
                    "https://www.academic-conferences.org/wp-content/uploads/2019/11/logo-iscte-iul-In-Blue.png"
                    alt="Portugal flag" />
                <h3>BSC Telecomunications and Computer Engineering</h3>
                <h3>2014 - 2017</h3>
                <div class="bar-holder">
                    <div class="bar bar-14">Final grade: 14</div>
                </div>
            </div>
            <div className='educationCard'>
                <img  className="universityLogo" src=
                    "https://www.academic-conferences.org/wp-content/uploads/2019/11/logo-iscte-iul-In-Blue.png"
                    alt="UK flag" />
                <h3>MSC Computer Engineering</h3>
                <h3>2017 - 2019</h3>
                <div class="bar-holder">
                    <div class="bar bar-18">Final grade: 18</div>
                </div>
            </div>
        </div>
    </div>
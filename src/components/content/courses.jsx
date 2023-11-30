import './courses.css'
import React from 'react'

export default props =>
    <div className='courses'>
        <h2 className='mainTitle'>courses</h2>
        <hr />
        <div className='coursesContainer'>
        <div className='coursesCard'>
                <img className="universityLogo" src=
                    "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                    alt="Portugal flag" />
                <h3>The Complete 2023 Web Development Bootcamp</h3>
                <h3>Udemy - 2023</h3>
            </div>
            <div className='coursesCard'>
                <img className="universityLogo" src=
                    "https://img-c.udemycdn.com/course/240x135/1076168_b0b9_2.jpg"
                    alt="Portugal flag" />
                <h3>Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!</h3>
                <h3>Udemy - 2023</h3>
            </div>
            <div className='coursesCard'>
                <img className="universityLogo" src=
                    "https://seekvectorlogo.com/wp-content/uploads/2019/07/uipath-vector-logo.png"
                    alt="Portugal flag" />
                <h3>RPA Developer Advanced</h3>
                <h3>UiPath Academy - 2020</h3>
            </div>
            <div className='coursesCard'>
                <img  className="universityLogo" src=
                    "https://seekvectorlogo.com/wp-content/uploads/2019/07/uipath-vector-logo.png"
                    alt="UK flag" />
                <h3>RPA Developer Foundation</h3>
                <h3>UiPath Academy - 2020</h3>
            </div>
        </div>
    </div>
import './navBar.css'
import React from 'react'

export default props =>
    <ul className='navBarList'>
        <li><a href="/profile"><strong>Profile</strong></a></li>
        <li><a href="/education"><strong>Education</strong></a></li>
        <li><a href="/experience"><strong>Experience</strong></a></li>
        <li><a href="/language"><strong>Language</strong></a></li>
        <li><a href="/skills"><strong>Skills</strong></a></li>
        <li><a href="/courses"><strong>Courses</strong></a></li>
    </ul>
import React from 'react'
import './NavBar.css'

/**
 * Component with the navigation bar that allow the user to navigate between the diferent components that was specified in the HashRouter
 * Note: href optimized to use with GH-pages
 */
export default props =>
    <ul className='navBarList'>
        <li><a href="/cv_react/#/profile"><strong>Profile</strong></a></li>
        <li><a href="/cv_react/#/education"><strong>Education</strong></a></li>
        <li><a href="/cv_react/#/experience"><strong>Experience</strong></a></li>
        <li><a href="/cv_react/#/language"><strong>Language</strong></a></li>
        <li><a href="/cv_react/#/skills"><strong>Skills</strong></a></li>
        <li><a href="/cv_react/#/courses"><strong>Courses</strong></a></li>
    </ul>
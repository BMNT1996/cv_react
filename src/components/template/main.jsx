import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Main.css'

import NavBar from './NavBar'
import Profile from "../content/Profile"
import Education from "../content/Education"
import Experience from "../content/Experience"
import Languages from "../content/Languages"
import Skills from "../content/Skills"
import Courses from "../content/Courses"

/**
 * Main component, where the content will be showed according to the route
 */
export default props =>
    <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Profile />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
          <Route exact path="/language" element={<Languages />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route path="*" element={<Profile />} />
        </Routes>
    </div>
import './main.css'
import React from 'react'
import NavBar from './navBar.jsx'
import { Routes, Route } from 'react-router-dom'

import Profile from "../content/profile.jsx"
import Education from "../content/education.jsx"
import Experience from "../content/experience.jsx"
import Languages from "../content/languages.jsx"
import Skills from "../content/skills.jsx"
import Courses from "../content/courses.jsx"

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
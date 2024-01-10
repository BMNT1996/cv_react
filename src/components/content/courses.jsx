import React from 'react'
import CardContainer from './CardContainer'
import Card from './Card'

/**
 * Component with the most important couses that I made
 */
export default props =>
    <CardContainer title="Courses">
            {/* Udemy course about React by Angela Yu */}
            <Card 
                image="https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg"
                mainLine="The Complete 2023 Web Development Bootcamp" 
                secondLine="Udemy - 2023"/>
            {/* Udemy couse about React by Leonardo Leitão */}
            <Card 
                image="https://img-c.udemycdn.com/course/240x135/1076168_b0b9_2.jpg"
                mainLine="Curso React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!"
                secondLine="Udemy - 2023"/>
            {/* Advanced UiPath course */}
            <Card 
                image="https://seekvectorlogo.com/wp-content/uploads/2019/07/uipath-vector-logo.png"
                mainLine="RPA Developer Advanced"
                secondLine="UiPath Academy - 2020"/>
            {/* Foundation UiPath course */}
            <Card 
                image="https://seekvectorlogo.com/wp-content/uploads/2019/07/uipath-vector-logo.png"
                mainLine="RPA Developer Foundation"
                secondLine="UiPath Academy - 2020"/>
    </CardContainer>
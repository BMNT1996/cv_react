import './experience.css'
import React from 'react'

export default props =>
    <div className='experience'>
        <h2 className='mainTitle'>Experience</h2>
        <hr />
        <div className='timelineContainer'>
            <div className="timeline">
                <ul>
                    <li>
                        <div className="content">
                            <h3>Dutch Pension Managment Project T2B</h3>
                            <p><strong>Technology: </strong>Groovy <br /><br />
                            <strong>Project Details: </strong>Project developed to create pension management software in the Netherlands. The project had several teams with defined responsibilities. Within the project, we worked with several programming languages ​​and tools such as Groovy, Alfresco, Docker, React, Spring, among others<br /><br />
                            <strong></strong>Key Tasks: Develop webservices and extracts. These resources were used by the client to access the project database information. Among the data collected were files collected from Alfresco ECM</p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                            <h4>September 2021</h4>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                            <h3>Dutch Pension Managment Project T5</h3>
                            <p><strong>Technology: </strong>Alfresco <br /><br />
                            <strong>Project Details: </strong>Project developed to create pension management software in the Netherlands. The project had several teams with defined responsibilities. Within the project, we worked with several programming languages ​​and tools such as Groovy, Alfresco, Docker, React, Spring, among others<br /><br />
                            <strong>Key Tasks: </strong>Develop the process workflows of the project based on the Alfresco system</p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                            <h4>May 2021</h4>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                            <h3>Portuguese Bank RPA Project</h3>
                            <p><strong>Technology: </strong>UiPath <br /><br />
                            <strong>Project Details: </strong>Project for the development and maintenance of robots aimed at automating the company's routine processes.<br/><br />
                            <strong>Key Tasks: </strong>Develop and maintain robots responsible for automating company processes</p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                            <h4>November 2020</h4>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                            <h3>Finnish salary project</h3>
                            <p><strong>Technology: </strong>Java (Microservice architecture)<br /><br />
                            <strong>Project Details: </strong>Project developed to create salary management software in Finland. The project was developed based on microservices architecture. The project was developed in Java and functionality tests were ensured by tests in JUnit.<br/><br />
                            <strong>Key Tasks: </strong>Develop the report service responsable for retrieving the data from the others services and ensure the full coverage of the unit tests
                            </p>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                            <h4>January 2020</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
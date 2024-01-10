import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom"
import "./App.css"

import SideBar from "../components/template/SideBar"
import Title from "../components/template/Title"
import Main from "../components/template/Main"
import Footer from "../components/template/Footer"
import Profile from "../components/content/Profile"
import Education from "../components/content/Education"
import Experience from "../components/content/Experience"
import Languages from "../components/content/Languages"
import Skills from "../components/content/Skills"
import Courses from "../components/content/Courses"

/**
 * App component, it is the root component of the App where all components will be rendered
 */
export default props => {
  const size = useWindowSize();
  const widthThreshold = 700

  return (
    /**
    * Alternative solution to handle the responsiveness in mobile devices.
    * If the width of the screen is smaller than the threshold it will be rendered the mobile version of the application, otherwise 
    * it will be rendered the normal version
    */
    <div>
      {/* Normal version of the application */}
      {size.width > widthThreshold &&
        <HashRouter>
          <div className="app" id="mainSubtitle">
            <SideBar />
            <Title />
            <Main className="mainCell" />
            <Footer />
          </div>
        </HashRouter>
      }
      {/* Normal version of the application */}
      {size.width <= widthThreshold &&
        <div>
          <Title />
          <SideBar />
          <Profile />
          <Education />
          <Experience />
          <Languages />
          <Skills />
          <Courses />
          <Footer />
        </div>
      }
    </div>
  )

}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
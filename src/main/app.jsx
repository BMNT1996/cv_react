import React, { useEffect, useState } from "react";
import "./app.css"
import { HashRouter } from "react-router-dom"
import SideBar from "../components/template/sideBar.jsx"
import Title from "../components/template/title.jsx"
import Main from "../components/template/main.jsx"
import Footer from "../components/template/footer.jsx"
import Profile from "../components/content/profile.jsx"
import Education from "../components/content/education.jsx"
import Experience from "../components/content/experience.jsx"
import Languages from "../components/content/languages.jsx"
import Skills from "../components/content/skills.jsx"
import Courses from "../components/content/courses.jsx"

export default props => {
  const [view, setView] = useState(<div></div>);
  const size = useWindowSize();

  const handleView = () => {
    if (size.width > 600) {
      console.log(size.width)
      setView(<HashRouter>
        <div className="app" id="mainSubtitle">
          <SideBar />
          <Title />
          <Main className="mainCell" />
          <Footer />
        </div>
      </HashRouter>)
    } else {
      setView(<div>
        <Title />
        <SideBar />
        <Profile />
        <Education />
        <Experience />
        <Languages />
        <Skills />
        <Courses />
        <Footer />
      </div>)
    }
  }

  return (
    <div>
      {size.width > 600 && <HashRouter>
        <div className="app" id="mainSubtitle">
          <SideBar />
          <Title />
          <Main className="mainCell" />
          <Footer />
        </div>
      </HashRouter>
      }
      {
        size.width <= 600 && <div>
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
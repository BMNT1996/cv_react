import React from "react";
import "./app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideBar from "../components/template/sideBar.jsx"
import Title from "../components/template/title.jsx"
import Main from "../components/template/main.jsx"
import Footer from "../components/template/footer.jsx"

export default props =>
  <BrowserRouter>
    <div className="app" id="mainSubtitle">
      <SideBar />
      <Title />
      <Main className="mainCell"/>
      <Footer />
    </div>
  </BrowserRouter>
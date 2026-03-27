import { useEffect } from "react";
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Projects from "./Components/projects/Projects";
import Education from "./Components/education/Education";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";



// import React from 'react'

const App = () => {
  useEffect(() => {
    document.title = "Dhruvin Patel";
  }, []);

  return (
    <>
<Header/>
    <NavBar/>
    <Education/>
    <Services/>
    <Experience/>
    <Projects/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
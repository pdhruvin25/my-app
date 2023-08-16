import { useEffect } from "react";
import Header from "./Components/header/Header";
import NavBar from "./Components/navbar/NavBar";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
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
    <About/>
    <NavBar/>
    <Experience/>
    <Services/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App
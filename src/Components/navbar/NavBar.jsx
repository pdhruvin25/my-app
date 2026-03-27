import React, { useState } from 'react'
import {HiHome} from "react-icons/hi"
import {BsFillPersonLinesFill, BsGearWideConnected, BsFillRocketTakeoffFill} from "react-icons/bs"
import {GoBook} from "react-icons/go"
import {FaAward} from "react-icons/fa"
import "./navBar.css"
import {AiOutlineMessage} from "react-icons/ai"

 const NavBar = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><HiHome/></a>
      <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "active" : ""}><FaAward/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><BsGearWideConnected/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GoBook/></a>
      <a href="#projects" onClick={() => setActiveNav("#projects")} className={activeNav === "#projects" ? "active" : ""}><BsFillRocketTakeoffFill/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BsFillPersonLinesFill/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><AiOutlineMessage/></a>
    </nav>
  )
}
export default NavBar

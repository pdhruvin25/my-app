import React, { useState } from 'react'
import {HiHome} from "react-icons/hi"
import {BsFillPersonLinesFill, BsGearWideConnected} from "react-icons/bs"
import {GoBook} from "react-icons/go"
import {GrContact} from "react-icons/gr"

 const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header")
  return (
    <Nav>
<a href = "#header" onClick={() => setActiveNav("#header")} className={activeNav === "#header" ? "active" : ""}><HiHome/></a>
<a href = "#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><BsFillPersonLinesFill/></a>
<a href = "#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><GoBook/></a>
<a href = "#services"onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><BsGearWideConnected/></a>
<a href = "#contact"onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><GrContact/></a>


    </Nav>
  )
}
export default Nav

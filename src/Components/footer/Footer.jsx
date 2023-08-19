import React from 'react'
import './footer.css'
import {BsGithub, BsInstagram} from 'react-icons/bs'
import {FaLinkedinIn} from'react-icons/fa'


const Footer = () => {
  return (
    <footer>
<a href = "#" className='footer__logo'>Dhruvin Patel</a>
<ul className='permalinks'>
  <li><a href = "#">Home</a></li>
  <li><a href = "#about">About</a></li>
  <li><a href = "#experience">Experience</a></li>
  <li><a href = "#services">Services</a></li>
  <li><a href = "#contact">Contact Me</a></li>

</ul>

<div className="footer__socials">
  <a href = ""><FaLinkedinIn/></a>
  <a href = ""><BsInstagram/></a>
  <a href = ""><BsGithub/></a>
</div>
<div className="footer__copyright">
<small>&copy; Dhruvin Patel - All Rights Reserved</small>
</div>
    </footer>
  )
}

export default Footer
import React from "react";
import "./header.css";
import Info from "./Info";
import ME from "../../me_new.png";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I Am</h5>
        <h1>Dhruvin Patel</h1>
        <h5 className="text-light">Software Developer</h5>
        <Info />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down <AiOutlineArrowRight/>
        </a>
      </div>
    </header>
  );
};

export default Header;

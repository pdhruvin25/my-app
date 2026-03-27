import React from "react";
import "./header.css";
import Info from "./Info";
import HeaderSocials from "./HeaderSocials";
import { AiOutlineArrowRight } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Dhruvin Patel</h1>
        <Info />
        
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import Info from "./Info";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I Am</h5>
        <h1>Dhruvin Patel</h1>
        <h5 className="text-light">Software Engineer</h5>
        <Info />
      </div>
    </header>
  );
};

export default Header;

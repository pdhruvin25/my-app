import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="blank">
        <AiOutlineLinkedin style={{ width: '55px', height: '55px' }} />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub style={{ width: '50px', height: '50px' }} />
      </a>
    </div>
  );
};

export default HeaderSocials;

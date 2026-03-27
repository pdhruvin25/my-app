import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="www.linkedin.com/in/dhruvin-patel25" target="blank">
        <AiOutlineLinkedin style={{ width: '55px', height: '55px' }} />
      </a>
      <a href="https://github.com/pdhruvin25" target="blank">
        <BsGithub style={{ width: '50px', height: '50px' }} />
      </a>
    </div>
  );
};

export default HeaderSocials;

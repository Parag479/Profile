import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pdubey479@gmail.com</span>
        <div className="f-icons">
        <a className="App-link"
          href="https://github.com/Parag479"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

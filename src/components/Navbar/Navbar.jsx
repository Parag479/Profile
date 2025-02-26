import React, { useEffect } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Resume from './Parag_UI_UX.pdf';

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = Resume;
  link.download = 'Parag_UI_UX.pdf';
  link.click();
};

const Navbar = () => {
  useEffect(() => {
    handleDownload();
  }, []);

  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Parag</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            {/* <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li> */}
          </ul>
        </div>
        {/* <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button> */}
        <a onClick={handleDownload}>
          <button className="button s-button">Download CV</button>
        </a>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Navbar;

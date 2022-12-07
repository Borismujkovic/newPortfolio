import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";
import "./Header.scss";

export const Header = (props) => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div id={header ? "active" : "Header"}>
      <h1>
        <span>B</span>ORIS <span>M</span>UJKOVIC
      </h1>
      <div className="nav">
        <Link to="home" spy={true} smooth={true} duration={500}>
          <button>HOME</button>
        </Link>
        <Link to="tech" spy={true} smooth={true} duration={500}>
          <button>TECH</button>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          <button>PROJECTS</button>
        </Link>
        <Link to="about" spy={true} smooth={true} duration={1000}>
          <button>ABOUT</button>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={1000}>
          <button>CONTACT</button>
        </Link>
      </div>
    </div>
  );
};

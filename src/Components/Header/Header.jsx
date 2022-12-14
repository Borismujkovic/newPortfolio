import * as TbIcons from "react-icons/tb";
import * as AiIcons from "react-icons/ai";

import { Link, animateScroll as scroll } from "react-scroll";

import { useState } from "react";
import "./Header.scss";

export const Header = () => {
  const [header, setHeader] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [hamburger, setHamburger] = useState("hamburger");
  const [navMenu, setNavMenu] = useState("nav-menu");

  const open = () => {
    setIsOpened(!isOpened);
    if (isOpened) {
      setHamburger("hamburger active");
      setNavMenu("nav-menu active");
    } else {
      setHamburger("hamburger");
      setNavMenu("nav-menu");
    }
  };

  const close = () => {
    setHamburger("hamburger");
    setNavMenu("nav-menu");
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div id={header ? "Active" : "Header"}>
      <h1>
        <span className="span">B</span>ORIS <span className="span">M</span>
        UJKOVIC
      </h1>
      <ul className={navMenu}>
        <li className="nav-item">
          <AiIcons.AiOutlineHome />
          <Link
            to="home"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <AiIcons.AiOutlineTool />
          <Link
            to="tech"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            TECH
          </Link>
        </li>
        <li className="nav-item">
          <AiIcons.AiOutlineFundProjectionScreen />
          <Link
            to="projects"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            PROJECTS
          </Link>
        </li>
        <li className="nav-item">
          <TbIcons.TbMan />
          <Link
            to="about"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            ABOUT
          </Link>
        </li>
        <li className="nav-item">
          <AiIcons.AiOutlinePhone />
          <Link
            to="contact"
            className="nav-link"
            onClick={close}
            spy={true}
            smooth={true}
            duration={800}
          >
            CONTACT
          </Link>
        </li>
      </ul>
      <div className={hamburger} onClick={open}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

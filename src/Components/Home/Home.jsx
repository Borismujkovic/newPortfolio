import { Element, animateScroll as scroll } from "react-scroll";

import "./Home.scss";

export const Home = () => {
  return (
    <Element name="home">
      <div id="Home">
        <div className="container">
          <h1 className="typed-out-one">Hello, my name is Boris and</h1>
        </div>
        <div className="container">
          <h1 className="typed-out-two"> I am a Frontend Developer.</h1>
        </div>
      </div>
    </Element>
  );
};

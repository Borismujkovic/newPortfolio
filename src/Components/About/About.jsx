import { Element, animateScroll as scroll } from "react-scroll";
import image from "../../Assets/image.jpg";

import "./About.scss";

export const About = (props) => {
  return (
    <Element name="about">
      <div id="About">
        <h1 className="h1">About</h1>
        <div className="about-containter">
          <div class="frame">
            <img className="profile-img" src={image} alt="" />
          </div>
          <div className="about-section">
            <h1>EDUCATION:</h1>
            <h2>- Belgrade Institute of Technology (BIT)</h2>
            <h3>
              Attended a 10 week long (400 hours) bootcamp for front-end web
              development. During the bootcamp we had 9 hours of lectures and
              practical work every day with additional tasks and projects.
            </h3>
            <h2>- University of Belgrade, Faculty of Agriculture</h2>
            <h3>Major: Agroeconomics</h3>
          </div>
          <div className="about-section">
            <h1>LANGUAGES:</h1>
            <h3>- Serbian ( Native )</h3>
            <h3>- English ( Advanced Level )</h3>
            <h3>- German ( Beginner Level )</h3>
          </div>
        </div>
      </div>
    </Element>
  );
};

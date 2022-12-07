import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import hrlab from "../../Assets/HRLab.png";
import FoodOrder from "../../Assets/FoodOrder.png";
import IMDBReact from "../../Assets/IMDBReact.png";
import IMDBJS from "../../Assets/IMDBJS.png";
import JSProjects from "../../Assets/JSProjects.png";
import LBS from "../../Assets/LBS.png";

import "./Projects.scss";

export const Projects = () => {
  return (
    <Element name="projects">
      <div id="Projects">
        <h1>PROJECTS</h1>
        <div className="singleProject">
          <div className="description">
            <h2>HR-LAB</h2>
            <h3>
              A simple App for HRs from certain companies, written in React.js,
              as a final project in the Front-End Boot camp at the Belgrade
              Institute of Technology.
            </h3>
            <div>
              <button>
                <a
                  href="https://github.com/Borismujkovic/HR-lab"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/HR-lab"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={hrlab} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={FoodOrder} alt="" />
          </div>
          <div className="description">
            <h2>FoodOrderApp</h2>
            <h3>
              An application that serves for ordering food, written in React.js,
              as one of the practices for developing my skills.
            </h3>
            <div>
              <button>
                <a
                  href="https://food-order-react-rho.vercel.app/"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/FoodOrderReact"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="singleProject">
          <div className="description">
            <h2>BIT Show in React.js</h2>
            <h3>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in React.js.
            </h3>
            <div>
              <button>
                <a href="https://top-tvs-how-react.vercel.app/" target="_blank">
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/TopTVShow-React"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={IMDBReact} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={IMDBJS} alt="" />
          </div>
          <div className="description">
            <h2>BIT Show in JavaScript</h2>
            <h3>
              An application that shows 50 top-rated movies on IMDB and their
              details, written in JavaScript.
            </h3>
            <div>
              <button>
                <a href="https://bit-show-js.vercel.app/" target="_blank">
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/TopTVShow-JS"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="singleProject">
          <div className="description">
            <h2>Small JS Projects in JavaScript</h2>
            <h3>
              An application that contains three small JS apps, written in
              JavaScript.
            </h3>
            <div>
              <button>
                <a
                  href="https://js-projects-28tq0xewx-borismujkovic.vercel.app/"
                  target="_blank"
                >
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/JSProjects"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
          <div className="project-img">
            <img className="project-logo" src={JSProjects} alt="" />
          </div>
        </div>
        <div className="singleProject">
          <div className="project-img">
            <img className="project-logo" src={LBS} alt="" />
          </div>
          <div className="description">
            <h2>LBS in React</h2>
            <h3>
              An application that shows all the employees of one company with
              the form to add new employees, written in React.js.
            </h3>
            <div>
              <button>
                <a href="https://lbs-intern.vercel.app/" target="_blank">
                  Live
                </a>
              </button>
              <button>
                <a
                  href="https://github.com/Borismujkovic/LBS-intern"
                  target="_blank"
                >
                  GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

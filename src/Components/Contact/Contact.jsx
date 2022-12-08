import { Element, animateScroll as scroll } from "react-scroll";

import "./Contact.scss";

export const Contact = () => {
  return (
    <Element name="contact">
      <div id="Contact">
        <h1>CONTACT ME</h1>
        <div></div>
        <div className="contact-info">
          <div className="info-container">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                alt=""
              />
            </div>
            <div>
              <h2>Phone:</h2>
              <h3>+381 63 393 070</h3>
            </div>
          </div>
          <div className="info-container">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/552/552486.png"
                alt=""
              />
            </div>
            <div>
              <h2>Email:</h2>
              <h3>borismujkovic@gmail.com</h3>
            </div>
          </div>
          <div className="info-container">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/128/9062/9062564.png"
                alt=""
              />
            </div>
            <div>
              <h2>Address:</h2>
              <h3>Karadjordjeva 2, Pancevo, Serbia</h3>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

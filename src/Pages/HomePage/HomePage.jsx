import { About } from "../../Components/About/About";
import { Contact } from "../../Components/Contact/Contact";
import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import { Projects } from "../../Components/Projects/Projects";
import { Technologies } from "../../Components/Technologies/Technologies";
import { Footer } from "../../Components/Footer/Footer";

import "./HomePage.scss";

export const HomePage = () => {
  return (
    <div id="HomePage">
      <div className="snow"></div>
      <Header />
      <Home />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

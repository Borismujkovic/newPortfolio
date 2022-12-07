import "./Footer.scss";

export const Footer = () => {
  return (
    <div id="Footer">
      <h1>
        <span className="nameLetter">B</span>oris{" "}
        <span className="nameLetter">M</span>ujkovic
      </h1>
      <p>The problem is there to find the solution for it.</p>
      <div className="links-div">
        <a
          className="link"
          href="https://github.com/Borismujkovic"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/25/25657.png"
            alt=""
          />
          <span>GitHub Profile</span>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/boris-mujkovic-897949172/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
            alt=""
          />
          <span>LinkedIn Profile</span>
        </a>
      </div>
      <p>Copyright © 2022 Boris.</p>
    </div>
  );
};

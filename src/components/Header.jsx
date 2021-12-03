import React from "react";
import Typical from "react-typical";

const Header = () => {
  return (
    <header id="header">
      <h1>
        HI THERE I'M <br/>
        <span className="glow" id = "glow">Abhishek ranjan</span>
      </h1>
      <br />

      <h3>
        I am a{" "}
        <b>
          <Typical
            loop={Infinity}
            steps={[
              "Full Stack Developer 💻",
              2000,
              "MERN Stack Developer",
              3000,
            ]}
            wrapper="b"
          />
        </b>
      </h3>
      <a
        id="resume"
        href="https://drive.google.com/file/d/1VOhfFvmM6Y5PPenGOhm6fWp9KQPEO9dy/view?usp=sharing"
        download
      >
        Resume
      </a>
      <a id="know-more" href="#about">
        Know more
      </a>
      <a
        id="github"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/AbhishekRanjan8051"
      >
        Github
      </a>
    </header>
  );
};

export default Header;

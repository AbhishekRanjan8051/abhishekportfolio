import React from "react";

function Footer() {
  return (
    <div className="footer">
      <a href="#header">
        <i className="fas fa-chevron-up"></i>
      </a>
      <br />
      <div className="wrap">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AbhishekRanjan8051"
        >
          <i className="fab fa-github"></i>
        </a>
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://codesandbox.io/u/abhishekranjan8051"
        >
          <i className="fab fa-codepen"></i>
        </a>
      </div>
      <hr />
      <p>
        &copy; 2021 - Designed & Developed by{" "}
        <a href="https://github.com/AbhishekRanjan8051">Abhishek Ranjan</a>{" "}
      </p>
      <p>Open sourced under MIT License</p>
      <br />
      <div className="wrap float-end">
        <a className="git-ele" href="www.github.com/AbhishekRanjan8051">
          Fork
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <a className="git-ele" href="www.github.com/AbhishekRanjan8051">
          Star
        </a>
      </div>
      <br />
    </div>
  );
}

export default Footer;

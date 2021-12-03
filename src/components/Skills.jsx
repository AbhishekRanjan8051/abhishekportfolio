import React from "react";

const Skills = () => {
  return (
    <div className="skills-container">
      <div>
        <h1>Skills</h1>
      </div>
      <br />
      <br />

      <div className="skillcontain">
        <div>
          <h1>Frontend</h1>
          <div className="skills">
            <div className="icon">
              <i className="fab fa-react"></i>
            </div>
            <div className="icon">
              <i className="fab fa-html5"></i>
            </div>
            <div className="icon">
              <i className="fab fa-css3"></i>
            </div>

            <div className="icon">
              <i className="fab fa-bootstrap"></i>
            </div>
          </div>
        </div>
        <div>
          <h1>Back-end</h1>
          <div className="skills">
            <div className="icon">
              <i className="fab fa-js-square"></i>
            </div>
            <div className="icon">
              <i className="fab fa-git-alt"></i>
            </div>
            <div className="icon">
              <i className="fab fa-node"></i>
            </div>
            <div className="icon">
              <i className="fab fa-mdb"></i>
            </div>
            <div className="icon">
              <i className="fab fa-node-js"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import profile from "../images/profile.jpg";

function About() {
  return (
    <div id="about">
      <div className="text">
        <h1>Who I am.</h1>
        <img
          src={profile}
          className="img-fluid float-lg-start"
          width="30%"
          alt="..."
        />
        <p>
          I'm Abhishek Ranjan, I'm a Dedicated and aspiring full-stack web
          developer with specialization in MERN stack. Looking forward to
          contributing my skills and knowledge towards the development of the
          organization and achieving its goals while gaining hands-on technical
          expertise.
        </p>
        <div>
          <h1>Education</h1>
         
        </div>
      </div> 
    </div>
  );
}

export default About;

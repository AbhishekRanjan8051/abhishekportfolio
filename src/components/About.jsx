import React from "react";
import profile from "../images/profile.jpg";
import styled from "styled-components";
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Boxdiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Eduction = styled.div`
  background: #3fd3c7;
  height: 30rem;

  flex: 50%;
  border: 2px solid black;
  border-radius: 15px 50px;
`;
const Online = styled.div`
  background: #3fd3c7;
  height: 30rem;
  border: 2px solid black;
  flex: 40%;
  border-radius: 50px 15px;
`;

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

        <Boxdiv>
          <Eduction>
            <h2 style={{ color: "white" }}>Eduction</h2>
            <h4>B.Sc (Mathematics)</h4>
            <a
              href="https://lnmu.ac.in/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span>Lalit Narayan Mithila University, Darbhanga</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1jm9LftnXWa6_C1iB9GX-cKHyzPUwB5UP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Docs</Button>
            </a>
            <hr />
            <h4>12th (Science)</h4>
            <a
              href="https://schools.org.in/samastipur/10191913003/m-f-d-k-college-baghla.html"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span> M.F.D.K. COLLEGE BAGHLA , Samastipur</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1Ns7i4k1PstYx14dV-5QrAlAg-ptjirmm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button>Docs</Button>
            </a>
            <hr />
            <h4>10th</h4>
            <a
              href="https://schools.org.in/samastipur/10190900204/b-r-b-high-school-andour.html"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <span>B.R.B High School Andour, Mohiuddin Nagar(Samastipur)</span>
              <a
                href="https://drive.google.com/file/d/1Q30tUcPfi6O8LylTPe8UouTheGdcvNd4/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Docs</Button>
              </a>
            </a>
          </Eduction>
          <Online>
            <h3 style={{ color: "black" }}>Licenses & Certifications</h3>
            <br />
            <hr />
            <span style={{ fontWeight: "bold" }}>
              Introduction to Programming Using HTML
            </span>
            <div style={{ color: "blue", fontWeight: "bold" }}>
              ➡️ Great Learning
            </div>
            <hr />
            <span style={{ fontWeight: "bold" }}>HTML5 and CSS3</span>
            <div style={{ color: "blue", fontWeight: "bold" }}>➡️ Cutshort</div>
            <hr />
            <span style={{ fontWeight: "bold" }}>Marketing Internship</span>
            <div>➡️ MyCaptain</div>
            <hr />
          </Online>
        </Boxdiv>
      </div>
    </div>
  );
}

export default About;

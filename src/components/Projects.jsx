import React from "react";
import seekho from "../images/seekho.png";
import lovelula from "../images/lovelula.png";

function Projects() {
  return (
    <div id="projectss">
      <div className="projects">
        <div className="projecttitle">
          <h1>Some of my projects.</h1>
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Seekho App</h5>
              <img className="card_img" src={seekho} alt="no" />
              <p className="card-text">
                This is a site made with html, css & js which simply shows the
                weather of any place accurately.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/vcow10kar/seekho-project"
              >
                <button type="button" className="btn btn-primary">
                  Github
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://seekho-frontend-vcow10kar.vercel.app/"
              >
                <button type="button" className="btn btn-primary">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">LoveLula </h5>
              <img className="card_img" src={lovelula} alt="no" />
              <p className="card-text">
                A web application that provides natural and organic beauty
                products.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbhishekRanjan8051/lovelula"
              >
                <button type="button" className="btn btn-primary">
                  Github
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbhishekRanjan8051/lovelula"
              >
                <button type="button" className="btn btn-primary">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Porter.in</h5>
              <img className="card_img" src={seekho} alt="no" />
              <p className="card-text">
                Porter is a huge network of transportation for intra-city
                logistics services.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/dheerajbisht362/constructWeekPorterClone"
              >
                <button type="button" className="btn btn-primary">
                  Github
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dheerajbisht362.github.io/constructWeekPorterClone/home.html"
              >
                <button type="button" className="btn btn-primary">
                  Demo
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tic Toe Tic Game</h5>
              <img className="card_img" src={seekho} alt="no" />
              <p className="card-text">
                I've made this with Reactjs , this game is for two player who
                want to play tic toe tic online unless they want waste paper.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AbhishekRanjan8051/abhishek-masai/tree/master/unit-4/React/assingments/tic_toe_tic"
              >
                <button type="button" className="btn btn-primary">
                  Github
                </button>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tic-toe-tic-abhishekranjan8051.vercel.app/"
              >
                <button type="button" className="btn btn-primary">
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

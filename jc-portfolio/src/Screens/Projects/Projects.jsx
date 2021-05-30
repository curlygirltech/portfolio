// import { Link } from "react-router-dom";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Check out My Work</h1>
      <div className="projects-container">
        <div className="item">
          <a href="https://heuristic-ptolemy-d4f1c6.netlify.app/">
            <img src="technologic.png" alt="" />
          </a>
        </div>
        <div className="projects-about">
            <h3>Technologic</h3>
          <p>
            Technologic is an inventory app inspired by Craigslist where users
            buy and sell pre-loved tech devices. Users can create an account and
            contact sellers or create posts for items that they wish to sell.
          </p>
          <p>
            This application was built in collaboration with engineers using
            MongoDB, Express, React, and NodeJS
          </p>
          <div className="project-button">
            <button>Live Site</button>
            <button>GitHub Repo</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

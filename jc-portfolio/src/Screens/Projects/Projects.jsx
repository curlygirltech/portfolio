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
            <h3>Technologic</h3>
          </a>
          <p>Technologic is a full stack app</p>
        </div>
      </div>
    </div>
  );
}

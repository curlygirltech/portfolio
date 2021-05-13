// import { Link } from "react-router-dom";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Check out My Work</h1>
      <div className="projects-container">
        <div className="item">
          <a href="https://heuristic-ptolemy-d4f1c6.netlify.app/">
          <img src="technologic.png" alt=""/>
            <h3>Technologic</h3>
          </a>
          <p>Technologic is a full stack app</p>
        </div>
      </div>
      <a href="https://drive.google.com/file/d/16o3r8-YwZWgUIaEnBMEPb3bga3LYyt7Y/view?usp=sharing">
        <h3>Download my resume</h3>
        <img src="download-symbol.png" alt="" />
      </a>
    </div>
  );
}

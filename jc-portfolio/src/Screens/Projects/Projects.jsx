import { Link } from "react-router-dom";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Check out My Work</h1>
      <a href="https://drive.google.com/file/d/16o3r8-YwZWgUIaEnBMEPb3bga3LYyt7Y/view?usp=sharing">
        <h3>Download my resume</h3>
        <img src="download-symbol.png" alt="download resume" />
      </a>
    </div>
  );
}

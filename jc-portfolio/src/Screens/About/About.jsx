import React from "react";
import "./about.scss";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-card">
        <h1>About Me</h1>
        <p>
          Hello! I am a dynamic Software Engineer who aims to bridge the gap
          between functionality and creativity by approaching problems from an
          entrepreneurial perspective. With a background in communications and
          education, quick-thinking and productivity are second-skin. I love to
          serve companies that stimulate change with ambitious goals by using
          code to solve everyday problems and streamline processes.
        </p>
      </div>
        <div className="tech-stack-card">
        <h2>👩🏾‍💻Tech Stack:</h2>
        <h4>
          Frontend Development: React, Vanilla JavaScript, HTML/
          CSS, SASS
          Backend Development: Python, PostgreSQL, MongoDB, Ruby on Rails,
          Express JS, Node JS.
        </h4>
        </div>
    </div>
  );
}

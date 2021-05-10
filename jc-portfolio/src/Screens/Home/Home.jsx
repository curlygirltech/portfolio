import React from "react";
import{HashLink as Link} from 'react-router-hash-link'
import "./home.scss";

export default function Home() {
  return (
    <div className="home-container" id="home">
      <div className="left">
        <div className="imgContainer">
          <img
            src="jovonnecameron-removebg-preview.png"
            alt="picture of girl"
          ></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi! I'm</h2>
          <h1>Jovonne</h1>
          <h3>a Software Engineer</h3>
        </div>
        <Link to="#projects">
          <img src="downarrow-removebg-preview.png" alt="down-arrow towards portfolio" />
        </Link>
      </div>
    </div>
  );
}

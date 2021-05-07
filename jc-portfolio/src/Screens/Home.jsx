import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="heading">Hi! I'm <b>Jovonne</b>, a Software Engineer</h1>
      <p>I build full-stack apps with a front-end focus</p>
      <div className='jc-img'>
        <img src="jovonnecameron.png" ></img>
      </div>
      <button>Get Resume</button>
      <button>My Work</button>
    </div>
  )
}

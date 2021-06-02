import "../Screens/Projects/projects.scss"
import React from 'react'

export default function Project(props) {

  const {
    image,
    alt,
    title,
    description,
    languages,
    site,
    github
  } = props

  return (
    <div className="projects" id="projects">
      <div className="project-card">
      <a href={site} classname="project-image-link">
        <img src={image} alt={alt} classname="project-image"/>
      </a>
      <article className="project-description">
        <h3>{title}</h3>
        <p className="project-paragraph">{description}</p>
        <p className="project-languages">{languages}</p>
        <div classname="project-buttons">
          <a href={site} className="link-button">
            <button>Live Site</button>
          </a>
          <a href={github} className="link-button">
            <button>Github Repo</button>
          </a>
        </div>
      </article>
    </div>
    </div>
  )
}

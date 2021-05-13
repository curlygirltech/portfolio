import {Link} from 'react-router-dom'
import './projects.scss'

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1> Check out My Work</h1>
      {/* <Link to="/public/JCameronResume.pdf"> */}
      <button>Resume</button>
      {/* </Link> */}
    </div>
  )
}

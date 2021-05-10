import{HashLink as Link} from 'react-router-hash-link'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
      <div className="left" >
        <Link to="#home">Jovonne Cameron</Link>
      </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
      {/* <Link smooth to="#home">Home</Link>
      <Link smooth to="#about">About</Link>
      <Link smooth to="#projects">Projects</Link>
      <Link smooth to="#testimonials">Testimonials</Link>
    <Link smooth to="#contact">Contact</Link> */}
            </div>
      </div>
      </div>
      
    </div>
  )
}

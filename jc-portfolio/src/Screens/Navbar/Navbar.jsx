import{HashLink as Link} from 'react-router-hash-link'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link smooth to="#home">Home</Link>
      <Link smooth to="#about">About</Link>
      <Link smooth to="#projects">Projects</Link>
      <Link smooth to="#testimonials">Testimonials</Link>
      <Link smooth to="#contact">Contact</Link>
      
    </div>
  )
}

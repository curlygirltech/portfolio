import{HashLink as Link} from 'react-router-hash-link'
import "./navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/testimonials">Testimonials</Link>
      <Link to="/contact">Contact</Link>
      
    </div>
  )
}

import "./menu.scss"
import{HashLink as Link} from 'react-router-hash-link'


export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu "+(menuOpen && "active")} >
      <Link smooth to="#home">Home</Link>
      <Link smooth to="#about">About</Link>
      <Link smooth to="#projects">Projects</Link>
      <Link smooth to="#testimonials">Testimonials</Link>
      <Link smooth to="#contact">Contact</Link>
      
    </div>
  )
}

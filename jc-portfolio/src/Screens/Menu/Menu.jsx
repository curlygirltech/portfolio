import "./menu.scss"
import{HashLink as Link} from 'react-router-hash-link'


export default function Menu({ menuOpen, setMenuOpen }) {
  
  const handleClick=()=> {
    setMenuOpen(false)
  }
  
  return (
    <div className={"menu "+(menuOpen && "active")} >
      <Link smooth to="#home" onClick={handleClick}>Home</Link>
      <Link smooth to="#about" onClick={handleClick}>About</Link>
      <Link smooth to="#projects" onClick={handleClick}>Projects</Link>
      <a href="https://drive.google.com/file/d/16o3r8-YwZWgUIaEnBMEPb3bga3LYyt7Y/view?usp=sharing" onClick={handleClick}>Resume</a>
      {/* <Link smooth to="#testimonials" onClick={handleClick}>Testimonials</Link> */}
      <Link smooth to="#contact" onClick={handleClick}>Contact</Link>
      
    </div>
  )
}

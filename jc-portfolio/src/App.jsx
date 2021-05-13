import "./App.scss";
import Navbar from "./Screens/Navbar.jsx/Navbar";
import Menu from "./Screens/Menu/Menu";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Projects from "./Screens/Projects/Projects";
import Testimonials from "./Screens/Testimonials /Testimonials";
import Contact from "./Screens/Contact/Contact";
import { useState } from "react";
import Resume from "./Screens/Resume/Resume";

function App() {
  const [menuOpen, setMenuOpen]= useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Home />
      <About />
      <Projects />
      <Resume/>  
      <Testimonials />
      <Contact />  
      </div>
        
    </div>
  );
}

export default App;

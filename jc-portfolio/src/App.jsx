import "./App.scss";
import Navbar from "./Screens/Navbar.jsx/Navbar";
import About from "./Screens/About/About";
import Home from "./Screens/Home/Home";
import Contact from "./Screens/Contact/Contact";
import Projects from "./Screens/Projects/Projects";
import Testimonials from "./Screens/Testimonials /Testimonials";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      </div>
        
    </div>
  );
}

export default App;

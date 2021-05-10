import "./App.scss";
import { Route, Switch } from "react-router";
import Navbar from "./Screens/Navbar/Navbar";
import About from "./Screens/About/About";
import Home from "./Screens/Home/Home"
import Contact from "./Screens/Contact/Contact";
import Projects from "./Screens/Projects/Projects";
import Testimonials from "./Screens/Testimonials /Testimonials";

function App() {
  return (
    <div className="app">
      <Navbar/>
      
        {/* <Route exact path="/testimonials"> */}
          <Testimonials/>
        {/* </Route> */}
        {/* <Route exact path="/projects"> */}
          <Projects />
        {/* </Route> */}
        {/* <Route exact path="/contact"> */}
          <Contact />
        {/* </Route> */}
        {/* <Route exact path="/about"> */}
          <About />
        {/* </Route> */}
        {/* <Route exact path="/"> */}
          <Home />
        {/* </Route> */}
      
    </div>
  );
}

export default App;

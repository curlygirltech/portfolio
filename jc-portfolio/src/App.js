import "./App.scss";
import About from "./Screens/About/About";
import { Route, Switch } from "react-router";
import Home from "./Screens/Home/Home"
import Contact from "./Screens/Contact/Contact";
import Projects from "./Screens/Projects/Projects";
import Navbar from "./Screens/Navbar/Navbar";
import Testimonials from "./Screens/Testimonials /Testimonials";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Switch>
        <Route path="/testimonials">
          <Testimonials/>
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

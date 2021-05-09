import "./App.css";
import About from "./Screens/About";
import { Route, Switch } from "react-router";
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";
import Projects from "./Screens/Projects";

function App() {
  return (
    <div className="app">
      <Switch>
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

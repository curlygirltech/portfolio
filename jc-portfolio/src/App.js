import logo from "./logo.svg";
import "./App.css";
import About from "./Screens/About";
import { Route, Switch } from "react-router";
import Home from "./Screens/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

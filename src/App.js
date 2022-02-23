import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>

    </>


  );
}

export default App;

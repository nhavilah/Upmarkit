import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Email from './Email';
import './App.css';

function Routing() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to="staff">
              <button>Staff</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <button>About</button>
            </Link>
          </div>
          <div className="homebutton">
            <Link to="/">
              <button>Upmarkit</button>
            </Link>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path="/staff">

        </Route>
        <Route path="/contact">
          <Email />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="homepage">
      <h1>Got A Project?
        <br />
        We Can Help
      </h1>
      <br />
      <button>Get Started</button>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>Stuff About Us</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <div class="topnav">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { Component } from "react";
import logo from './logo.svg';
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import Home from "./components/Home";
import Stuff from "./components/Stuff";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";


class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
              <h1>Goran Aviani</h1>

              <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff I do</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <div className="content">
                 <Route exact path="/" component={Home}/>
                 <Route path="/stuff" component={Stuff}/>
                 <Route path="/projects" component={Projects}/>
                <Route path="/contact" component={Contact}/>
              </div>
            </div>
        </HashRouter>
    );
  }
}

export default Main;
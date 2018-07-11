import React, { Component } from "react";
import logo from './logo.svg';

class Main extends Component {
  render() {
    return (
        <div>
          <h1>Simple SPA</h1>

            <header><img src={logo} className="App-logo" alt="logo" /></header>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff I do</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">

          </div>
        </div>
    );
  }
}

export default Main;
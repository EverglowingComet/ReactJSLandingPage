import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-light navbar-light">
        <a class="navbar-brand page-scroll" href="/">Live</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item">
                <a href="#features" className="page-scroll">
                  Features
                </a>
            </li>
            <li class="nav-item">
                <a href="#about" className="page-scroll">
                  About
                </a>
            </li>
            <li class="nav-item">
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
            </li>    
          </ul>
        </div>  
      </nav>
    );
  }
}

export default Navigation;

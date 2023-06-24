import React, { useState, useEffect } from "react";
import resume from './assets/resume.pdf'

/** DESCRIPTION
 *
 * Props:
 *
 * State:
 *
 * PARENT -> Nav -> {CHILDREN}
 */

function Nav() {
  //TODO:hamburger at med screen
  //TODO:hide completely at small screen
  //TODO:make navbar text stand out more
  //TODO:scrollspy!
  return (
    <nav className="navbar navbar-expand-sm fixed-top bg-primary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#intro">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={resume}>Resume</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Nav;

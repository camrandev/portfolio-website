import React, { useState, useEffect } from "react";

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
  return (
    <nav className="navbar navbar-expand-sm fixed-top">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Introduction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Connect</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Nav;

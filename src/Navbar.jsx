import React from "react";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-5">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item mx-3">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>

            <li className="nav-item mx-5">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>

            <li className="nav-item mx-5">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>

            <li className="nav-item mx-5">
              <a className="nav-link" href="#resume">
                Resume
              </a>
            </li>

            <li className="nav-item mx-5">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
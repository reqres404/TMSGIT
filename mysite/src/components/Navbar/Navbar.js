import React from "react";
import "./Navbar.css";
import resume from '../../images/main-resume.pdf'
const Navbar = () => {
  return (
    <div className="navbar-container">
      <body>
        <nav>
          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <i class="fas fa-bars"></i>
          </label>
          <label class="logo" href="google.com">Aditya</label>
          <ul>
            <li>
              <a href="https://github.com/reqres404" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/adittyapatil/">LinkedIn</a>
            </li>
            <li>
              <a className="nav-button" target="_blank" href={resume}>Resume</a>
            </li>
          </ul>
        </nav>
      </body>
    </div>
  );
};
export default Navbar;

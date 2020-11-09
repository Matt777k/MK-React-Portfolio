import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        Matthew Kerr (Orlando, FL)
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                to="/MK-React-Portfolio/aboutpage" className=
                {window.location.pathname === "/MK-React-Portfolio/aboutpage"
                  ? "nav-link active"
                  : "nav-link"}
                > About
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/MK-React-Portfolio/portfoliopage" className=
                {window.location.pathname === "/MK-React-Portfolio/portfoliopage"
                  ? "nav-link active"
                  : "nav-link"}
                > Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink
                to="/MK-React-Portfolio/contactpage" className=
                {window.location.pathname === "/MK-React-Portfolio/contactpage"
                  ? "nav-link active"
                  : "nav-link"}
                > Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;

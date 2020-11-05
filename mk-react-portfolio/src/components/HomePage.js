import React from 'react';
import App from '../App';

function HomePageContainer() {
    return(
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Matthew Kerr (Orlando, FL)</a>
      <button
        class="navbar-toggler"
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
            <a className="nav-link" href="index.html"
              >About <span class="sr-only">(current)</span></a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link" href="portfolio.html">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
    )
        
}


export default HomePageContainer;
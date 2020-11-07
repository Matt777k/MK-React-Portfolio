import React from "react";

function Footer() {
  return (
    <footer className="footer bg-light text-center">
      <div className="container">
        <span className="text-muted">
          Matthew Kerr RD (check out my professional links here).
        </span>
        <a
          className="btn-floating btn-lg btn-git"
          type="button"
          role="button"
          href="https://github.com/Matt777k"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          className="btn-floating btn-lg btn-so"
          type="button"
          role="button"
          href="https://stackoverflow.com/cv/matthewkerr"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-stack-overflow"></i>
        </a>
        <a
          className="btn-floating btn-lg btn-so"
          type="button"
          role="button"
          href="https://www.linkedin.com/in/matthew-kerr-rd-ld-8568ba134/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
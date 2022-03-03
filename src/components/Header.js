import React from "react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="Header">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            {/* <img className="logoBrand" src="/images/logo.png" alt="" /> */}
            WaifuDao
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  THE STORY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  GALLERY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ROADMAP
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ARTIST
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TEAM
                </a>
              </li>
            </ul>
            <div>
              <SocialLinks />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

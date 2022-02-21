import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container-fluid">
        <div className="footerContent">
          <div className="search">
            <h4>JOIN THE CLUB</h4>
            <form action="">
              <input type="text" placeholder="Enter your email address" />
              <button className="footerBtn">
                <img src="/images/arrow.png" alt="" />
              </button>
            </form>
          </div>
          <a className="text-center" href="">
            <img className="logoBrand" src="/images/logo.png" alt="" />
          </a>
          <div className="links">
            <h4>FOLLOW US</h4>
            <div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

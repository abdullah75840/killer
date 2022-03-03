import React from "react";
import SocialLinks from "./SocialLinks";
import Fade from "./Fade";

const Footer = () => {
  return (
    <Fade>
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
            <a className="text-center brand" href="">
              {/* <img className="logoBrand" src="/images/logo.png" alt="" /> */}
              WaifuDao
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
    </Fade>
  );
};

export default Footer;

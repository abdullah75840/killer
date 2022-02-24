import React from "react";
import Fade from "./Fade";

const HomeSection = () => {
  return (
    <section className="HomeSection">
      <div className="MainContent">
        <Fade>
          <h1>WELCOME TO KILLER GF</h1>
          <p>
            Killer GF is a 7,777 generative portrait art collection by a former
            Riot Games Artist, Zeronis, with over 240 meticulously designed
            features that contrasts cute and aesthetically appealing girlfriends
            that also happen to be dangerous assassins.
          </p>
          <div>
            <a href="#" className="mintBtn">
              Mint Killer GF NFTs
            </a>
          </div>
        </Fade>
      </div>
      <Fade>
        <div className="CardImages">
          <img className="background" src="/images/bg.jpg" alt="" />
          <img className="heart" src="/images/bg 1.png" alt="" />
          <img className="text" src="/images/text.png" alt="" />
          <img className="killer" src="/images/killer.png" alt="" />
        </div>
      </Fade>
    </section>
  );
};

export default HomeSection;

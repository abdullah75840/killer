import React from "react";
import Fade from "./Fade";

const Feature = () => {
  const socilIcon = [
    {
      icon: "instagram.svg",
    },
    {
      icon: "twitter.svg",
    },
    {
      icon: "artstation.svg",
    },
    {
      icon: "dots.svg",
    },
  ];
  return (
    <section className="Feature">
      <div className="row align-items-center">
        <div className="col-md-8 mb-4">
          <Fade>
            <h1>THE ARTISTS</h1>
          </Fade>
          <Fade>
            <p>
              Zeronis is a concept artist, father to three cats, content
              creator, NFT artist, and an avid gamer. A former senior concept
              artist at Riot Games for over 10 years, as well as a designer of
              many of the popular champions including Ahri, Gwen, and Vi. He
              also designed many successful skins such as Star Guardian, K/DA,
              and more.
            </p>
          </Fade>
          <Fade>
            <p>
              He is a prominent NFT artist with a myriad of anime inspired work
              on Foundation and is always looking for ways to share his
              characters and stories in this space. He is striving to create the
              best Waifu Web3 collecting game on the market.
            </p>
          </Fade>
          <Fade>
            <div>
              {socilIcon.map((item) => (
                <a href="#" className="socialLink">
                  <img
                    className="img-fluid"
                    src={`/images/${item.icon}`}
                    alt=""
                  />
                </a>
              ))}
            </div>
          </Fade>
        </div>
        <div className="col-md-4">
          <Fade>
            <div>
              <img className="img-fluid" src="/images/artist.jpg" alt="" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Feature;

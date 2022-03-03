import React from "react";
import Fade from "./Fade";

const InfoSection = () => {
  const infoData = [
    {
      heart: "black heart.svg",
      text: "6969  supply  it includes free OF lifetime for every holder + members only discord",
    },
    {
      heart: "black heart.svg",
      text: "3696- free 1 vid from tip menu every month ",
    },
    {
      heart: "black heart.svg",
      text: "1000 - vip 3 exclusive vids for free per month",
    },
    {
      heart: "black heart.svg",
      text: "696 - 5 videos for free from the tip menu  every month ",
    },
    {
      heart: "black heart.svg",
      text: "69 - XXX lives ( every 2 mo)",
    },
    {
      heart: "black heart.svg",
      text: "9 1/1 - custom videos (every  2 mo) OR  XXX FaceTime  (every  2 mo)",
    },
    {
      heart: "black heart.svg",
      text: "0.069 mint ",
    },
    {
      heart: "black heart.svg",
      text: "6.9% royalties",
    },
  ];
  return (
    <section className="InfoSection">
      <h1>ONLY FANS SUBS GET IN PRESALE</h1>
      <div>
        {infoData.map((item) => (
          <Fade>
            <div className="d-flex my-3">
              <span>
                <img style={{ width: "30px" }} src={`/images/${item.heart}`} alt="" />
              </span>
              <span className="mx-3">
                <p>{item.text}</p>
              </span>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

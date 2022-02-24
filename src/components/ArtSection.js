import React from "react";
import Fade from "./Fade";

const ArtSection = () => {
  const cardData = [
    {
      profile: "feature.jpg",
      text: "Laur",
    },
    {
      profile: "feature.jpg",
      text: "Benangbaja",
    },
    {
      profile: "feature.jpg",
      text: "Yueko",
    },
    {
      profile: "feature.jpg",
      text: "Cirilla",
    },
    {
      profile: "feature.jpg",
      text: "Robek",
    },
    {
      profile: "feature.jpg",
      text: "0010",
    },
    {
      profile: "feature.jpg",
      text: "Naoki Saito",
    },
  ];
  return (
    <section className="ArtSection">
      <Fade>
        <h1>FEATURE ARTISTS</h1>
        <p>
          We will be composing a <a href="#">Foundation</a> collection, where
          each artist has made a KGF derivative in their own style. Some time
          soon, we will be putting the 1/1s on Foundation for auction with the
          proceeds going to the following split:
        </p>
        <p>- 33% to KGF Team</p>
        <p>- 33% to the Artist</p>
        <p>- 33% to Charity (Artists pick!)</p>
      </Fade>
      <div className="feature">
        {cardData.map((item) => (
          <div className="Card mb-3">
            <Fade>
              <img src={`/images/${item.profile}`} alt="" />
              <h5>{item.text}</h5>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtSection;

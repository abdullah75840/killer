import React from "react";
import Fade from "./Fade";

const TeamSection = () => {
  const teamCard = [
    {
      img: "team 1.jpg",
      title: "Kai - Model",
      text: "Helps with the collection design, and all smart contract needs.",
      icon: "twitter.svg",
    },
    {
      img: "team 2.jpg",
      title: "Andrew - Developer",
      text: "Swag started his NFT Journey in early June of 2021. He now works full time in crypto, has a passion for collecting NFT's, and community building.",
      icon: "twitter.svg",
    },
    {
      img: "team 3.jpg",
      title: "Natalie - Community Manager",
      text: "Chase is the website developer for WaifuDao. Working to make sure everything is looking WaifuDao online.",
      icon: "twitter.svg",
    },
    {
      img: "team 4.jpg",
      title: "Penny - Social Media Manager",
      text: "Desto originally worked managing social media for a Collegiate-level Athletic Department and now pursues full time NFT social media work.",
      icon: "twitter.svg",
    },
    // {
    //   img: "team 5.jpg",
    //   title: "Morello - Advisor",
    //   text: "Desto originally worked managing social media for a Collegiate-level Athletic Department and now pursues full time NFT social media work.",
    //   icon: "twitter.svg",
    // },
    // {
    //   img: "team 6.jpg",
    //   title: "TylerTakesATrip - Assistant Community Manager",
    //   text: "While in remission in July of 2021, Tyler found an interest in crypto and currently works full time in NFTs. As our assistant community manager he oversees our moderation team and ensures the community is taken care of.",
    //   icon: "twitter.svg",
    // },
  ];
  return (
    <section className="TeamSection">
      <Fade>
        <h1>TEAM</h1>
      </Fade>
      <Fade>
        <p>
          uwulabs is the talented team of builders behind the <a href="">uwucrew</a> - an anime-inspired NFT project
          with a fun art focused community!
        </p>
      </Fade>
      <Fade>
        <p>
          We have collaborated with Zeronis to assist in development and community management for WaifuDao. We are
          excited to work with Zeronis and are looking forward to WaifuDao's future!
        </p>
      </Fade>
      <div className="row">
        {teamCard.map((item) => (
          <div className="col-md-3">
            <Fade>
              <div className="teamCards">
                <div className="text-center">
                  <img className="img-fluid" src={`/images/${item.img}`} alt="" />
                </div>
                <h5>{item.title}</h5>
                <div>{item.text}</div>
                <div>
                  <a href="">
                    <img src={`/images/${item.icon}`} alt="" />
                  </a>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

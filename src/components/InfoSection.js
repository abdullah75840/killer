import React from "react";

const InfoSection = () => {
  const infoData = [
    {
      heart: "black heart.svg",
      text: "Mint price: 0.08 ETH",
    },
    {
      heart: "black heart.svg",
      text: "uwucrew NFT whitelist discount mint price: 0.065 ETH",
    },
    {
      heart: "black heart.svg",
      text: "Whitelist and presale date: January 22nd 7:30 PM EST",
    },
    {
      heart: "black heart.svg",
      text: "Public sale date: January 24th 7:30 PM EST",
    },
    {
      heart: "black heart.svg",
      text: "Reveal date: January 28th 7:30 PM EST",
    },
    {
      heart: "black heart.svg",
      text: "Total NFTs: 7,777",
    },
    {
      heart: "black heart.svg",
      text: "NFTs withheld for team: 100",
    },
    {
      heart: "black heart.svg",
      text: "Traits: 8",
    },
    {
      heart: "black heart.svg",
      text: "Attributes: 240+",
    },
    {
      heart: "black heart.svg",
      text: "Royalty fees: 3%",
    },
    {
      heart: "black heart.svg",
      text: "Blockchain: Ethereum",
    },
    {
      heart: "black heart.svg",
      text: "NFT Standard: ERC-721",
    },
    {
      heart: "black heart.svg",
      text: "Asset hosting: IPFS",
    },
  ];
  return (
    <section className="InfoSection">
      <h1>MORE INFO</h1>
      <div>
        {infoData.map((item) => (
          <div className="d-flex my-3">
            <span>
              <img
                style={{ width: "30px" }}
                src={`/images/${item.heart}`}
                alt=""
              />
            </span>
            <span className="mx-3">
              <p>{item.text}</p>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoSection;

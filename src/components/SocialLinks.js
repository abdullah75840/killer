import React from "react";

const SocialLinks = () => {
  const iconsData = [
    {
      icon: "opensea.svg",
      address: "#",
    },
    {
      icon: "etherscan.svg",
      address: "#",
    },
    {
      icon: "twitter.svg",
      address: "#",
    },
    {
      icon: "discord.svg",
      address: "#",
    },
    {
      icon: "medium.svg",
      address: "#",
    },
  ];
  return (
    <div className="SocialLinks">
      {iconsData.map((item) => (
        <a href={item.address}>
          <img src={`/images/${item.icon}`} alt="" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;

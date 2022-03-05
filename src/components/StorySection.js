import React from "react";
import Fade from "./Fade";

const StorySection = () => {
  const imageData = [
    {
      image: "1.png",
    },
    {
      image: "2.png",
    },
    {
      image: "3.png",
    },
    {
      image: "4.png",
    },
  ];
  return (
    <section className="StorySection">
      <div className="storyContent">
        <Fade>
          <h1>THE STORY</h1>
        </Fade>
        <Fade>
          <p>
            Hi I’m waifumia!! Im 19 years old & I'm obsessed with the world of NFTs 😇 I’m thrilled to be apart of this
            project. I'm eager to build an epic community & provide REAL value to all of my supporters the rewards for
            holders will be disclosed in our discord server! 😈 thank you so much! u guys are my everything !! ^-^
          </p>
        </Fade>
        <Fade>
          <p>
            WaifuDAO is a worldwide project that aims to improve the empowerment of content creators like myself! my
            team and I are working in providing new collections and possibilities with actual REAL utility, this will
            help encourage a more open community for everyone in which content will be shared with creators and their
            following directly without any intermediaries which will empower both creators and followers 💕
          </p>
        </Fade>
        <Fade>
          <p className="mb-0">Our core values are:</p>
          <p className="mt-0">Wellness, Affection, Innovation, Freedom, Unity</p>
        </Fade>
        <div className="row my-5">
          {imageData.map((item) => (
            <div className="col-md-6">
              <Fade>
                <img className="img-fluid m-3" src={`/images/${item.image}`} alt="" />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;

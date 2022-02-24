import React from "react";
import Fade from "./Fade";

const StorySection = () => {
  const imageData = [
    {
      image: "killer 1.jpg",
    },
    {
      image: "killer 2.jpg",
    },
    {
      image: "killer 3.jpg",
    },
    {
      image: "killer 4.jpg",
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
            Cerise is a woman of many faces. Yet by spy networks and online
            sleuths, she is known only as the Killer GF assassin— the
            uncatchable killer who has no true face. The secret to her success
            lies in one supernatural gift. Wielding the Mirror of Narcissus, she
            holds at her fingertips the ability to reform her appearance into
            any disguises and powers using this dark artifact. This mirror,
            which consumes both the life essences and appearance of her kills,
            was a gift from the Crimson God himself. A heirloom of sorts for his
            favorite dearly beloved killer to better serve him by carrying out
            the critical assassinations that bring down societies, religions,
            and supernatural entities. Gods, even with their gifts, can be cruel
            with jests that transcend across the multiverse…
          </p>
        </Fade>
        <Fade>
          <p>
            Knowing little of the trick inlaid within the Mirror, Cerise used it
            once more. But this one, being the 7,777th time triggered a breakage
            of dimensions within the mirror, pulling forth 7,777 versions of
            Cerise herself out into the same dimension, wearing what appears to
            be every disguise she has ever worn in the past for her kills.
          </p>
        </Fade>
        <Fade>
          <p>
            Now that is a lot of deadly assassins in one room. But get this,
            each being sentient and believing that she is the real Cerise, they
            agree the only way to determine the one true Cerise would be to
            participate in a game. A deadly set of challenges within the
            metaverse where by playing and winning hearts, the Cerises compete
            against each other using daring and cunning tactics with only one
            coming out of it alive by the end. They say the biggest enemy
            standing in your way is yourself, but did they mean all 7,777?
          </p>
        </Fade>
        <div className="row my-5">
          {imageData.map((item) => (
            <div className="col-md-6">
              <Fade>
                <img
                  className="img-fluid m-3"
                  src={`/images/${item.image}`}
                  alt=""
                />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;

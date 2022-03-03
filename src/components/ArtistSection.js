import React from "react";
import Fade from "./Fade";

const ArtistSection = () => {
  const itemData = [
    {
      image: "05.jpg",
    },
    {
      image: "06.jpg",
    },
    {
      image: "07.jpg",
    },
    {
      image: "08.jpg",
    },
  ];
  return (
    <section className="ArtistSection">
      <div className="row">
        <div className="col-md-6">
          <Fade>
            <h1>INSPIRATION</h1>
            <p>
              "The inspiration for the project came from the combination of my love for creating badass and beautiful
              female characters while also bringing a bit of the yandere flair to the mix. The project is also a special
              collaboration with uwulabs, creator of uwucrew."
            </p>
            <p className="text-end">- Zeronis, artist of WaifuDao</p>
          </Fade>
        </div>
        <div className="col-md-6">
          <div className="row my-5">
            {itemData.map((item) => (
              <div className="col-md-6">
                <Fade>
                  <img className="img-fluid m-3" src={`/images/${item.image}`} alt="" />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;

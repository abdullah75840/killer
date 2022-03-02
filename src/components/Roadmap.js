import React from "react";
import Fade from "./Fade";

const Roadmap = () => {
  return (
    <section className="Roadmap">
      <Fade>
        <h1>ROADMAP</h1>
        <p className="subText">
          WaifuDAO is completely focused on providing exclusive acces & benefits to their holders by delivering &
          completing the levels on our roadmap.
        </p>
      </Fade>
      <div className="roadmapContent">
        <div className="pointLine"></div>
        <Fade>
          <div className="point-2">
            <div className="pointText">
              <p>LEVEL 1 - 20%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>Discord Community Set Up</h2>
              </div>
              <p>The server for the waifuDAO community will be created.</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-1">
            <div className="pointText">
              <p>LEVEL 2 - 40%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>Exclusive Roles</h2>
              </div>
              <p>Our first members will be provided with exclusive roles & will have access to our whitelist sale!</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-2">
            <div className="pointText">
              <p>LEVEL 3 - 60%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>Release Tier Benefits</h2>
              </div>
              <p>Our holders will get access to their unique & exclusive benefits that will be revealed accordingly.</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-1">
            <div className="pointText">
              <p>LEVEL 4 - 80%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>Airdrop</h2>
              </div>
              <p>9 Daddy Tier NFTs will be airdropped to the top 9 biggest holders.</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-2">
            <div className="pointText">
              <p>LEVEL 5 - 100%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>Secret Utility Announced</h2>
              </div>
              <p>All of our long term holders will be provided with a secret & exclusive utility.</p>
            </div>
          </div>
        </Fade>
        {/* <Fade>
          <div className="point-1">
            <div className="pointText">
              <p>LEVEL 6 - 80%</p>

              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>PHYSICAL ITEMS</h2>
              </div>

              <p>MERCH APPAREL OF SHIRTS AND JACKETS WITH KILLER GF GRAPHIC DESIGNS WILL BE CREATED.</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-2">
            <div className="pointText">
              <p>LEVEL 7 - 90%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>METAVERSE</h2>
              </div>
              <p>
                VOXEL VERSIONS OF THE KILLER GF CHARACTERS WILL BE CREATED TO BE PLAYABLE WITHIN THE SANDBOX METAVERSE.
              </p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="point-1">
            <div className="pointText">
              <p>LEVEL 8 - 100%</p>
              <div>
                <div className="pointIndex">
                  <img className="img-fluid" src="/images/heart.svg" alt="" />
                </div>
                <h2>???</h2>
              </div>
              <p>THE MULTIVERSE</p>
            </div>
          </div>
        </Fade> */}
      </div>
    </section>
  );
};

export default Roadmap;

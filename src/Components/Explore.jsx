import React from "react";
import "./styles.css";
import LeftPanel from "./LeftPanel";
import books from "../Images/5books.png";
import boruto from "../Images/boruto.png";
import docker from "../Images/docker.png";
import elonmusk from "../Images/elonmusk.png";
import itachi from "../Images/itachi.png";
import minato from "../Images/minato.png";
import temple from "../Images/temple.png";
import hinata from "../Images/hinata.png";
import cricket from "../Images/cricket.png";
import lordShivaSakthi from "../Images/lordShivaSakthi.png";
import budha from "../Images/budha.jpg";
import beTrue from "../Images/beTrue.png";
import changeThink from "../Images/changeThink.png";
import sunMoon from "../Images/sunMoon.png";

import greatTest from "../Images/greatestTest.png";
import stress from "../Images/stress.png";

const Explore = () => {
  return (
    <div className="all">
      <div className="leftPanelOverlap">
        <LeftPanel />
      </div>

      <div className="imageCollage">
        <div className="imgContainer1">
          <div className="imgLayer">
            <img src={temple} alt="temple" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={budha} alt="budha" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={boruto} alt="boruto" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={elonmusk} alt="elon" width={315} height={325} />
          </div>
          <div className="imgLayerBig">
            <img src={itachi} alt="itachi" width={315} height={650} />
          </div>
        </div>
        <div className="imgContainer1">
          <div className="imgLayer">
            <img src={books} alt="books" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={minato} alt="minato" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={changeThink} alt="changethink" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={beTrue} alt="beTrue" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={sunMoon} alt="sunMoon" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={greatTest} alt="greatTest" width={315} height={325} />
          </div>
        </div>
        <div className="imgContainerBig">
          <div className="imgLayerBig">
            <img src={cricket} alt="cricket" width={315} height={650} />
          </div>
          <div className="imgLayer">
            <img src={lordShivaSakthi} alt="" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={docker} alt="docker" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={hinata} alt="hinata" width={315} height={325} />
          </div>
          <div className="imgLayer">
            <img src={stress} alt="stress" width={315} height={325} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

import React, { useState } from "react";
import "./styles.css";

import user1 from "../Images/user1.jpg";
import crazyMind from "../Images/crazyMind.webp";
import rahulpk from "../Images/rahulpk.webp";
import sneha from "../Images/sneha.jpg";
import animelast from "../Images/animelast.jpg";

const RightPanel = ({ ownername, Nodp }) => {
  return (
    <div className="rightPanel">
      <div className="accountDetails">
        <div className="people">
          <div className="pfImg1">
            <img src={Nodp} alt="" width={44} height={44} />
          </div>
          <div className="pfName1">{ownername}</div>
          <div className="follow">Switch</div>
        </div>
      </div>
      <div className="suggestions">
        <div className="suggestedHeading">
          <p>Suggested for you</p>
          <span>See All</span>
        </div>
        <div className="suggestedPeople">
          <div className="people">
            <img className="pfImg1" src={user1} />
            <div className="pfName1">dream_catcher</div>
            <div className="follow">Follow</div>
          </div>
          <div className="people">
            <img className="pfImg1" src={crazyMind} />
            <div className="pfName1">crazy_mind</div>
            <div className="follow">Follow</div>
          </div>
          <div className="people">
            <img className="pfImg1" src={rahulpk} />
            <div className="pfName1">Rahul_p_k</div>
            <div className="follow">Follow</div>
          </div>
          <div className="people">
            <img className="pfImg1" src={sneha} />
            <div className="pfName1">sneha_vaine</div>
            <div className="follow">Follow</div>
          </div>
          <div className="people">
            <img className="pfImg1" src={animelast} />
            <div className="pfName1">jene_one</div>
            <div className="follow">Follow</div>
          </div>
        </div>
      </div>
      <span className="about">
        About. Help. Press API. Jobs. Privacy Terms. <br />
        Locations. Language. Meta Verified <br />
        <br />© 2023 INSTAGRAM FROM META
      </span>
    </div>
  );
};

export default RightPanel;

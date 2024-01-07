import { React, useState } from "react";
import Modal from "react-modal";
import happychemicals from "../Images/happychemicals.png";
import waterfloat from "../Images/waterfloat.png";

import copper from "../Images/copper.png";
import cowdung from "../Images/cowdung.png";

import adithya from "../Images/adithyal1.png";
import dduknow from "../Images/ddiuknow.png";
import satRing from "../Images/saturnRing.png";
import sunMoon from "../Images/sunMoon.png";
import travelSpeed from "../Images/travelatSpeed.png";

import beTrue from "../Images/beTrue.png";
import changeThink from "../Images/changeThink.png";
import deepObs from "../Images/deeplyObserver.png";
import greatTest from "../Images/greatestTest.png";
import stress from "../Images/stress.png";
const MyModal = ({ isOpen, onRequestClose }) => {
  const [current, setCurrent] = useState(0);

  const images = [
    changeThink,
    travelSpeed,
    cowdung,
    sunMoon,
    beTrue,
    dduknow,
    beTrue,
    satRing,
    stress,
    greatTest,
    adithya,
    deepObs,
    copper,
    waterfloat,
  ];

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }
  const randomPosts = (myArray) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };

  return (
    <div className="StoryView">
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        className="ModalSlide"
      >
        <div className="sliderBody">
          <div className="slider">
            <div className="left-arrow" onClick={prevSlide}>
              ⬅
            </div>
            <div className="right-arrow" onClick={nextSlide}>
              ⮕
            </div>
            {images.map(
              (image, index) =>
                current === index && (
                  <div key={image} className="slide">
                    <img
                      src={randomPosts(images)}
                      alt="images"
                      width={700}
                      height={700}
                    />
                  </div>
                )
            )}
          </div>
        </div>
        <div className="closebutton">
          <button onClick={onRequestClose}>❌</button>
        </div>
      </Modal>
    </div>
  );
};

export default MyModal;

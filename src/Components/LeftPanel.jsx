import { React, useState } from "react";
import "./styles.css";
import insta from "../Images/insta.png";
import home from "../Images/home.png";
import Search from "../Images/Search.png";
import heart from "../Images/heart.png";
import reel from "../Images/reel.png";
import message from "../Images/message.png";
import explore from "../Images/explore.png";
import plus from "../Images/plus.png";
import thread from "../Images/thread.png";
import menu from "../Images/menu.png";
import Nodp from "../Images/Nodp.png";

import Create from "./Create";
import { Link } from "react-router-dom";
const LeftPanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="leftPanel">
      <div className="instaLog">
        <img src={insta} alt="logo" width={103} height={39} />
      </div>

      <Link to="/">
        <div className="Icons">
          <img src={home} alt="home" width={26} height={26} />
          <div className="Content">
            <p>Home</p>
          </div>
        </div>
      </Link>
      <Link to="/Search">
        <div className="Icons">
          <img src={Search} alt="Search" width={26} height={26} />
          <div className="Content">
            <p>Search</p>
          </div>
        </div>
      </Link>
      <Link to="/Explore">
        <div className="Icons">
          <img src={explore} alt="explore" width={26} height={26} />
          <div className="Content">
            <p>Explore</p>
          </div>
        </div>
      </Link>
      <Link to="/Reels">
        <div className="Icons">
          <img src={reel} alt="reel" width={26} height={26} />
          <div className="Content">
            <p>Reels</p>
          </div>
        </div>
      </Link>
      <Link to="/Messages">
        <div className="Icons">
          <img src={message} alt="msg" width={26} height={26} />
          <div className="Content">
            <p>Messages</p>
          </div>
        </div>
      </Link>
      <Link to="/Notificatons">
        <div className="Icons">
          <img src={heart} alt="heart" width={26} height={26} />
          <div className="Content">
            <p>Notifications</p>
          </div>
        </div>
      </Link>

      <div className="Icons" onClick={openModal}>
        <img src={plus} alt="heart" width={22} height={22} />
        <div className="Content">
          <p>Create</p>
        </div>
      </div>

      <Link to="/Profile">
        <div className="Icons">
          <div className="pfImg">
            <img src={Nodp} alt="no-dp" width={28} height={28} />
          </div>
          <div className="Content">
            <p>Profile</p>
          </div>
        </div>
      </Link>

      <div className="btIcons">
        <div className="Icons">
          <img src={thread} alt="heart" width={26} height={26} />
          <div className="Content">
            <p>Threads</p>
          </div>
        </div>
        <div className="Icons">
          <img src={menu} alt="heart" width={26} height={26} />
          <div className="Content">
            <p>More</p>
          </div>
        </div>
      </div>
      <Create isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default LeftPanel;

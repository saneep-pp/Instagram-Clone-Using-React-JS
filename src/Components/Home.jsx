import { React, useEffect, useState, useLayoutEffect, useMemo } from "react";
import "./styles.css";

import heart1 from "../Images/heart1.png";
import chat from "../Images/chat.png";
import send from "../Images/send.png";
import bookmark from "../Images/bookmark.png";
import more from "../Images/more.png";
import theinfomance from "../Images/theinfomance.jpg";
import numbers from "../Images/numbers.png";
import happychemicals from "../Images/happychemicals.png";
import waterfloat from "../Images/waterfloat.png";
import redHeart from "../Images/redHeart.png";
import blackSave from "../Images/blackSave.png";

import copper from "../Images/copper.png";
import cowdung from "../Images/cowdung.png";

import K_Knowledge from "../Images/4K_Knowledge.jpg";
import adithya from "../Images/adithyal1.png";
import dduknow from "../Images/ddiuknow.png";
import satRing from "../Images/saturnRing.png";
import sunMoon from "../Images/sunMoon.png";
import travelSpeed from "../Images/travelatSpeed.png";

import budha from "../Images/budha.jpg";
import beTrue from "../Images/beTrue.png";
import changeThink from "../Images/changeThink.png";
import deepObs from "../Images/deeplyObserver.png";
import greatTest from "../Images/greatestTest.png";
import stress from "../Images/stress.png";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MyModal from "./MyModel";

import Nodp from "../Images/Nodp.png";
import Create from "./Create";

import { useDataContext } from "../Context/PostsContext";
const Home = () => {
  const { data } = useDataContext();
  //console.log(data);

  const [likeCount, setLikeCount] = useState(0);
  const [likeCount1, setLikeCount1] = useState(50);
  const [likeCount2, setLikeCount2] = useState(80);
  const [likeCount3, setLikeCount3] = useState(134);
  const [likeCount4, setLikeCount4] = useState(234);
  const [likeCount5, setLikeCount5] = useState(334);

  const [like, setLike] = useState(false);

  const [liked, setLiked] = useState(false);
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);
  const [liked4, setLiked4] = useState(false);
  const [liked5, setLiked5] = useState(false);
  const [postImg, setPostImg] = useState([]);
  const [ownername, setOwnerName] = useState();

  const postsOftheInfomance = [
    numbers,
    happychemicals,
    waterfloat,
    copper,
    cowdung,
  ];
  const postsOf4K = [adithya, dduknow, satRing, sunMoon, travelSpeed];
  const postsOfbudha = [beTrue, changeThink, deepObs, greatTest, stress];

  const pfPhoto = [budha, K_Knowledge, theinfomance];
  const pfnames = [
    "believe_in..",
    "4K_Knowld..",
    "theInfomance",
    "budha",
    "nature_lov..",
  ];

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    // const dataFromLocalStorage = localStorage.getItem("myData");
    // const loggedInUser = localStorage.getItem("username");
    const loggedInUser = sessionStorage.getItem("username");
    if (loggedInUser) {
      //   // If data exists in localStorage, update the state

      setOwnerName(loggedInUser);
    }
  }, []);
  const [isModalOpen, setModalOpen] = useState(false);
  //To render all Stories
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  function scrollToPrev() {
    document.querySelector(".stories").scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  }

  function scrollToNext() {
    document.querySelector(".stories").scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  }

  // Memoize the array of post images to prevent unnecessary re-renders
  const postImgMemo = useMemo(() => {
    setPostImg((postImg) => {
      const filteredArray = postImg.filter((image) => image !== ""); // Remove empty strings
      return [...filteredArray, data];
    });
  }, [data]);

  // randomPosts and randomStorie function
  const [randomPostImage, setRandomPostImage] = useState("");
  const [randomPostImage1, setRandomPostImage1] = useState("");
  const [randomPostImage2, setRandomPostImage2] = useState("");

  useEffect(() => {
    // Set initial random post image when component mounts
    setRandomPostImage(getRandomPostImage(postsOftheInfomance));
    setRandomPostImage1(getRandomPostImage(postsOfbudha));
    setRandomPostImage2(getRandomPostImage(postsOf4K));
  }, []);
  const randomPosts = (myArray) => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  const getRandomPostImage = (postArray) => {
    return randomPosts(postArray);
  };

  //Like action
  const likeActions = () => {
    if (like === false) {
      setLikeCount(likeCount + 1);

      setLike(like);
    } else if (likeCount >= 0) {
      setLikeCount(likeCount - 1);

      setLike(!like);
    }
    setLike(!like);
  };
  const likeAction = () => {
    if (liked === false) {
      setLikeCount(likeCount + 1);

      setLiked(liked);
    } else if (likeCount >= 0) {
      setLikeCount(likeCount - 1);

      setLiked(!liked);
    }
    setLiked(!liked);
  };

  //Like action1
  const likeAction1 = () => {
    if (liked1 === false) {
      setLikeCount1(likeCount1 + 1);

      setLiked1(liked1);
    } else if (likeCount1 >= 0) {
      setLikeCount1(likeCount1 - 1);

      setLiked1(!liked1);
    }
    setLiked1(!liked1);
  };

  //Like action2
  const likeAction2 = () => {
    if (liked2 === false) {
      setLikeCount2(likeCount2 + 1);

      setLiked2(liked2);
    } else if (likeCount2 >= 0) {
      setLikeCount2(likeCount2 - 1);

      setLiked2(!liked2);
    }
    setLiked2(!liked2);
  };

  //Like action3
  const likeAction3 = () => {
    if (liked3 === false) {
      setLikeCount3(likeCount3 + 1);

      setLiked3(liked3);
    } else if (likeCount3 >= 0) {
      setLikeCount3(likeCount3 - 1);

      setLiked3(!liked3);
    }
    setLiked3(!liked3);
  };

  //Like action4
  const likeAction4 = () => {
    if (liked4 === false) {
      setLikeCount4(likeCount4 + 1);

      setLiked4(liked4);
    } else if (likeCount4 >= 0) {
      setLikeCount4(likeCount4 - 1);

      setLiked4(!liked4);
    }
    setLiked4(!liked4);
  };

  //Like action5
  const likeAction5 = () => {
    if (liked5 === false) {
      setLikeCount5(likeCount5 + 1);

      setLiked5(liked5);
    } else if (likeCount5 >= 0) {
      setLikeCount5(likeCount5 - 1);

      setLiked5(!liked5);
    }
    setLiked5(!liked5);
  };

  return (
    <div>
      <div className="main">
        <LeftPanel />
        <div className="middle">
          <div className="scrollpost">
            <div className="controlStories">
              <div className="PrevButton" onClick={scrollToPrev}>
                {"<"}
              </div>

              <div className="stories">
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPostImage1}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPostImage2}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPostImage}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(pfPhoto)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(postsOfbudha)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(postsOf4K)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(pfPhoto)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPostImage}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(postsOfbudha)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPosts(pfPhoto)}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
                <div className="story">
                  <div className="userstory">
                    <img
                      src={randomPostImage2}
                      onClick={openModal}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="username">
                    <p>{randomPosts(pfnames)}</p>
                  </div>
                </div>
              </div>
              <div className="NextButton" onClick={scrollToNext}>
                {">"}
              </div>
            </div>

            {/* posts */}
            {data.previewURL &&
              postImg.map((item) => {
                return (
                  <div className="post">
                    <div className="contentHeading">
                      <div className="pfphoto">
                        <img src={Nodp} alt="pfimg" width={31} height={31} />
                      </div>
                      <div className="pfName">
                        <p>{ownername}</p>
                      </div>
                      <div className="time">
                        <p>3s</p>
                      </div>
                      <div className="morediv">
                        <img src={more} alt="more" width={24} height={24} />
                      </div>
                    </div>
                    <div className="Contentbox">
                      <img
                        src={item.previewURL}
                        alt=""
                        width={468}
                        height={585}
                      />
                    </div>
                    <div className="reactions">
                      <img
                        className="like"
                        src={like ? redHeart : heart1}
                        alt="like"
                        width={24}
                        height={24}
                        onClick={likeActions}
                      />

                      <img src={chat} alt="comment" width={24} height={24} />
                      <img src={send} alt="share" width={24} height={24} />
                      <div className="save">
                        <img
                          src={bookmark}
                          alt="comment"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>

                    <span className="likes">
                      <p>{likeCount} Likes</p>
                    </span>
                  </div>
                );
              })}
            {/* Posts from others */}
            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={theinfomance} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>theInfomance</p>
                </div>
                <div className="time">
                  <p>26m</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount} Likes</p>
              </span>
            </div>
            {/* end of post1 */}
            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={K_Knowledge} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>4K_Knowledge</p>
                </div>
                <div className="time">
                  <p>46m</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage2} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked1 ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction1}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount1} Likes</p>
              </span>
            </div>
            {/* end of post2 */}
            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={budha} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>believe_in_budha</p>
                </div>
                <div className="time">
                  <p>1h</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage1} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked2 ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction2}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount2} Likes</p>
              </span>
            </div>
            {/* end of post3 */}

            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={theinfomance} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>theInfomance</p>
                </div>
                <div className="time">
                  <p>2h</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked3 ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction3}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount3} Likes</p>
              </span>
            </div>
            {/* end of post4 */}
            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={K_Knowledge} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>4K_Knowledge</p>
                </div>
                <div className="time">
                  <p>3h</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage2} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked4 ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction4}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount4} Likes</p>
              </span>
            </div>
            {/* end of post5 */}
            <div className="post">
              <div className="contentHeading">
                <div className="pfphoto">
                  <img src={budha} alt="pfimg" width={31} height={31} />
                </div>
                <div className="pfName">
                  <p>believe_in_budha</p>
                </div>
                <div className="time">
                  <p>4h</p>
                </div>
                <div className="morediv">
                  <img src={more} alt="more" width={24} height={24} />
                </div>
              </div>
              <div className="Contentbox">
                <img src={randomPostImage1} alt="" width={468} height={585} />
              </div>
              <div className="reactions">
                <img
                  className="like"
                  src={liked5 ? redHeart : heart1}
                  alt="like"
                  width={24}
                  height={24}
                  onClick={likeAction5}
                />

                <img src={chat} alt="comment" width={24} height={24} />
                <img src={send} alt="share" width={24} height={24} />
                <div className="save">
                  <img src={bookmark} alt="comment" width={24} height={24} />
                </div>
              </div>

              <span className="likes">
                <p>{likeCount5} Likes</p>
              </span>
            </div>
            {/* end of post6 */}
            <MyModal isOpen={isModalOpen} onRequestClose={closeModal} />
          </div>
          <RightPanel ownername={ownername} Nodp={Nodp} />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useMemo, useEffect } from "react";
import setting from "../Images/setting.png";
import createIcon from "../Images/createIcon.png";
import LeftPanel from "./LeftPanel";
import Create from "./Create";
import Nodp from "../Images/Nodp.png";

import { useDataContext } from "../Context/PostsContext";
const Profile = () => {
  const [select, setSelect] = useState("POSTS");
  const [postImg, setPostImg] = useState([]);
  const [ownername, setOwnerName] = useState();
  const [postCount, setPostCount] = useState(0);
  const { data } = useDataContext();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("username");
    if (loggedInUser) {
      //   // If data exists in localStorage, update the state

      setOwnerName(loggedInUser);
    }
  }, []);
  // Memoize the array of post images to prevent unnecessary re-renders
  const postImgMemo = useMemo(() => {
    setPostImg((postImg) => {
      const filteredArray = postImg.filter((image) => image !== ""); // Remove empty strings
      setPostCount(postCount + 1);
      return [...filteredArray, data];
    });
  }, [data]);
  console.log(postImg.previewURL);
  console.log("rendering");
  const renderDiv = (heading) => {
    setSelect(heading);
  };
  return (
    <div className="all">
      <div className="leftPanelOverlap">
        <LeftPanel />
      </div>
      <div className="Pmain">
        <div className="PField">
          <div className="PfPhotoCover">
            <div className="PfPhoto">
              <img src={Nodp} alt="no-dp" width={132} height={132} />
            </div>
          </div>
          <div className="PfAllDetails">
            <div className="PfAcces">
              <div className="Pusername">
                <p>{ownername}</p>
              </div>
              <button>Edit Profile</button>
              <button>view archieve</button>
              <div className="settingIcon">
                <img src={setting} alt="" width={24} height={24} />
              </div>
            </div>
            <div className="PfDetails">
              <div className="posts">
                <p>
                  {" "}
                  <b>{postCount}</b> posts
                </p>
              </div>
              <div className="followers">
                <p>
                  <b>443</b> followers
                </p>
              </div>
              <div className="following">
                <p>
                  <b>443</b> following
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="favStories">
          <div className="favStoryWrap">
            <div className="favStory">
              <img src={createIcon} alt="cre8Icon" width={44} height={44} />
            </div>
            <p>New</p>
          </div>
        </div>
        <div className="Pnav">
          <div className="Pline"></div>
          <div className="Phead">
            <p onClick={() => renderDiv("POSTS")}>POSTS</p>
            <p onClick={() => renderDiv("SAVED")}>SAVED</p>
            <p onClick={() => renderDiv("TAGGED")}>TAGGED</p>
          </div>
          <div className="Pposts"></div>
          <div className="Psaved"></div>
          <div className="Ptag"></div>
        </div>
        <div className="ShowPostSave">
          {select === "POSTS" && (
            <div className="OwnPosts">
              {postImg.map((item, ind) => {
                return (
                  <div className="OwnPost" key={ind}>
                    {!item.previewURL ? (
                      <div>No Post Posted Yet..!</div>
                    ) : (
                      <div>
                        <img
                          src={item.previewURL}
                          alt=""
                          width={309}
                          height={309}
                        />
                      </div>
                    )}
                  </div>
                );
                // console.log(item.previewURL);
              })}
            </div>
          )}
          {select === "SAVED" && (
            <div className="SavedPosts">
              <div className="OwnPost">
                <div>There is no Posts Saved!</div>
              </div>
            </div>
          )}

          {select === "TAGGED" && (
            <div className="TaggedPosts">
              <div className="OwnPost">
                <div>There is no Posts Tagged!</div>
              </div>
            </div>
          )}

          <div className="footerContent">
            <p>
              Meta About Blog Jobs Help API Privacy Terms Locations Instagram
              Lite Threads Contact uploading and non-users Meta Verified <br />{" "}
              <br />
              English (UK) <span className="cpyright">© 2023 Instagram </span>
              from Meta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

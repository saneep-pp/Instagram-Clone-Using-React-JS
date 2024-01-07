import { React, useState } from "react";
import Modal from "react-modal";
import media from "../Images/media.svg";
import styled from "styled-components";
import { useDataContext } from "../Context/PostsContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Create = ({ isOpen, onRequestClose }) => {
  const { data, setContextData } = useDataContext();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setSelectedImage({ file, previewURL: URL.createObjectURL(file) });
    }
  };

  const handleUpload = () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const sendData = () => {
    // You can access 'data' here
    setContextData(selectedImage);
    console.log("Data from child:" + data);

    toast("Your post is Live now");
    setTimeout(onRequestClose, 4000, setSelectedImage(null));
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Example Modal"
        className="ModalCreate"
      >
        <div className="CreateContainer">
          <ToastContainer />
          <div className="CreateHeading">
            <div className="h2">Create new post</div>
            {selectedImage !== null && (
              <div className="sharePost" onClick={sendData}>
                <p>Share</p>
              </div>
            )}
          </div>
          <div className="CreateLine"></div>
          {selectedImage !== null ? (
            <div className="CreateImgPost" id="CreateImgPost">
              <img
                src={selectedImage.previewURL}
                alt="Selected Preview"
                width={585}
                height={684}
              />
            </div>
          ) : (
            <div className="CreateIcons">
              <img src={media} alt="" />
              <div className="CreateContent">
                <p>Drag photos and videos here</p>
              </div>

              <button className="SelectImg" onClick={handleUpload}>
                <input type="file" onChange={handleImageChange} />
                Select From Computer
              </button>
            </div>
          )}
        </div>

        <div className="closebutton">
          <button onClick={onRequestClose}>❌</button>
        </div>
      </Modal>
    </div>
  );
};

export default Create;

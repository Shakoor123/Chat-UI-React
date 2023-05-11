import React, { useState } from "react";
import "./Profile.css";
const Profile = ({ setIsProfile }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePictureChange = (event) => {
    setPicture(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div className="profile">
      <button
        className="crossButton"
        onClick={() => {
          setIsProfile(false);
        }}
      >
        X
      </button>
      <div className="profileWrapper">
        <div className="h2wrapper"></div>
        <h2 className="h2">John dou</h2>
        <div className="imageSection">
          <img
            src="https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw"
            alt=""
            className="profileImage"
          />
          <input type="text" className="file" id="file" />
          <div className="imguttons">
            <button className="imgBtn" htmlFor="file">
              Edit
            </button>
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="name"
            placeholder=" "
            value={name}
            onChange={handleNameChange}
            className="input"
          />
          <label htmlFor="email">Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="name"
            placeholder=" "
            value={email}
            onChange={handleEmailChange}
            className="input"
          />
          <label htmlFor="email">Email</label>
        </div>
        <button className="imgBtn">Save</button>
      </div>
    </div>
  );
};

export default Profile;

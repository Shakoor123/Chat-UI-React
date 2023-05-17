import React, { useState } from "react";
import "./Messenger.css";
import Profile from "./profile/Profile";
import Requests from "./requests/Requests";

import { FaUserPlus, FaComments, FaSearch } from "react-icons/fa";

const Messenger = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isRequests, setIsRequests] = useState(true);
  return (
    <div className="chat-container">
      {isRequests ? (
        <Requests setIsRequests={setIsRequests} />
      ) : (
        <>
          {" "}
          {isProfile ? (
            <Profile setIsProfile={setIsProfile} />
          ) : (
            <>
              <div className="friends-section">
                <div className="friends-header">
                  <h2>My Friends</h2>

                  <button
                    onClick={() => {
                      setIsRequests(true);
                    }}
                  >
                    <FaUserPlus style={{ padding: 7 }} />
                  </button>
                </div>
                <form className="searchUser">
                  <input
                    type="text"
                    className="input"
                    placeholder="usename..."
                  />
                  <button type="submit">
                    <FaSearch className="search" />
                  </button>
                </form>
                <ul className="friends-list">
                  <li className="friend">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                    <div className="friend-info">
                      <h3>John Doe</h3>
                      <p>Last message received.</p>
                    </div>
                    <div className="followText">+</div>
                  </li>
                  <li className="friend">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                    <div className="friend-info">
                      <h3>Jane Doe</h3>
                      <p>Last message received.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-section">
                <div className="chat-header">
                  <h2>Chatting with John Doe</h2>
                  <button>
                    <FaUserPlus />
                  </button>
                </div>
                <div className="chat-messages">
                  <div className="chat-message received">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                    <div className="message-content">
                      <p>Hello!</p>
                    </div>
                  </div>
                  <div className="chat-message sent">
                    <div className="message-content">
                      <p>Hi there!</p>
                    </div>
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                  </div>
                </div>
                <form className="chat-input messageWrap">
                  <input type="text" placeholder="Type a message..." />
                  <button type="submit">
                    <FaComments />
                  </button>
                </form>
              </div>
              <div className="online-friends-section">
                <div className="online-friends-header">
                  <h2>Online Friends</h2>
                </div>
                <ul className="online-friends-list">
                  <li className="online-friend">
                    <img src="https://via.placeholder.com/50" alt="Profile" />
                    <div className="online-friend-info">
                      <h3>Jane Doe</h3>
                      <p>Last seen 10 minutes ago.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAMFBMVEXk5ueutLfIzc+rsbTn6eq3vL/b3t+/xMbR1Nbh4+SyuLvM0NLU19ne4OLEycu6wMKhm4/+AAACmUlEQVRoge2a0ZKDIAxFBQKIAv7/367adtd2W0hsQmdnuU99OxMSSbjpMHR1dXV1dXV1dXV1/XkBQEgphfVHY/DgZj+pTZPNMbXjQ9CTMuomY5SNQxM6hHwA3/h2bACH+Tf5QnfidPuUvNO1KBzS86CvcC+Jdq/BO3z5GFoSnmro7dhlcg6vy+wAnyXgkBHoFe4E2A6FXi9Z/sBhwqGV4b/hIjLsNXBuNFgsmj9wbLY3WV40eDyavdSxlbazM+uhU46c+dBBk9gqcbIXEtpERjYp3cxTRKCxFWc3Q3TPO1lGNq3MefvJv2XT0Kxsaq0tn/vGeC90fPfe2ZwDI6mFMjdRmEmFPgVG9pBoPZR3aKIknPl9QGrghrN9rwoENveDkFDp/K8ifLUxV9qwBY6EizwGcWyRFziMODg/ecA+wKOQ2bRU4TK2w66pApe02KAMF4x6g5eOXcBxuIe/sFObGKqQnoZulG5hY0O05gFvTE6N7Htw2Zgrf/th5zbW/ZUOYdR+sXbxOrZemcBR7aBDcG6cs/d2k/dZj9GJ74s27OztpL6zfcu4muyiY5BKO4DTy/RY4XfFrmwWWBit4FziHvg+sp4+JK0Q4G++Z7vhwHk8+Eq3LMGDW4jkC/79VSEkasxH+lvw9TlykrzTfThNB1ebU2rw0x0duZwp0+2Z0CFgVlJ1+InB9e3z/qFThziIPOAdThteAb8V4obzoklwoFqYdTg654GZrAijO8vH9SiU7cVxpTwRyt5lT/ZFmJSj971kePXUse7CCXbdDJEKu275yYWNCJxmlBNVzrhQkV9ULnXqzpWoouNI+GfBKZWqjbr3JKq4HxZNd6WXCn5huwpfGexWhqAKDQVGLaxioQurgO7q6ur6+/oC2M0fplIVs2cAAAAASUVORK5CYII="
                className="menuIcon"
                alt=""
                onClick={() => {
                  setIsProfile(true);
                }}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Messenger;

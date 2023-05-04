import React from "react";
import { FaUserPlus, FaComments } from "react-icons/fa";
import "./App.css";
function App() {
  return (
    <div className="chat-container">
      <div className="friends-section">
        <div className="friends-header">
          <h2>My Friends</h2>
          <button>
            <FaUserPlus />
          </button>
        </div>
        <ul className="friends-list">
          <li className="friend">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <div className="friend-info">
              <h3>John Doe</h3>
              <p>Last message received.</p>
            </div>
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
        <form className="chat-input">
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
              <h3>John Doe</h3>
              <p>Last seen 5 minutes ago.</p>
            </div>
          </li>
          <li className="online-friend">
            <img src="https://via.placeholder.com/50" alt="Profile" />
            <div className="online-friend-info">
              <h3>Jane Doe</h3>
              <p>Last seen 10 minutes ago.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;

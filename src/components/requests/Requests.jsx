import React from "react";
import "./Requests.css";
import { FaUserPlus, FaComments, FaSearch } from "react-icons/fa";

const Requests = ({ setIsRequests }) => {
  return (
    <div>
      <div className="requests">
        <button
          className="crossButton"
          onClick={() => {
            setIsRequests(false);
          }}
        >
          X
        </button>
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
    </div>
  );
};

export default Requests;

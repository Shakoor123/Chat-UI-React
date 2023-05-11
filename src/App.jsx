import React from "react";
import "./App.css";
import Messenger from "./components/Messenger";
import Login from "./components/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile/Profile";
import Requests from "./components/requests/Requests";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Messenger />} />
          <Route path="/login" element={<Login />} />
          <Route path="/requests" element={<Requests />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

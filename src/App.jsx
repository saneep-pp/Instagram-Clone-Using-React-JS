import { useState } from "react";
import Login from "./Components/Login";
import "./App.css";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Profile from "./Components/Profile";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

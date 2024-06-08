import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignIn";
import "./index.css";
import CreateMeet from "./pages/CreateMeet";
const App = () => {
  return (
    <div className="__className_aaf875 bg-dark-2">
      <Routes>
        <Route path="/" element={<CreateMeet />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;

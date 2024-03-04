import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import ProfileView from "./components/views/ProfileView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExploreView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/users/:id" element={<ProfileView />} />
    </Routes>
  );
}

export default App;

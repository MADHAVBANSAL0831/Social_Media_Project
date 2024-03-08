import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import ProfileView from "./components/views/ProfileView";
import CreatePostView from "./components/views/CreatePostView";
import PostView from "./components/views/PostView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ExploreView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/signup" element={<SignupView />} />
      <Route path="/users/:id" element={<ProfileView />} />
      <Route path="/posts/:id" element={<PostView />} />
      <Route path="/posts/create" element={
              // <PrivateRoute>
                <CreatePostView />
              // </PrivateRoute>
            }
          />
    </Routes>
  );
}

export default App;

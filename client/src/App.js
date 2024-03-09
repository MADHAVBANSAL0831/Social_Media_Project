import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import ProfileView from "./components/views/ProfileView";
import CreatePostView from "./components/views/CreatePostView";
import PostView from "./components/views/PostView";
import SearchView from "./components/views/SearchView";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <Toaster position='bottom-right' toastOption={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<ExploreView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/signup" element={<SignupView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/users/:id" element={<ProfileView />} />
        <Route path="/posts/:id" element={<PostView />} />
        <Route path="/posts/create" element={
                // <PrivateRoute>
                  <CreatePostView />
                // </PrivateRoute>
              }
            />
      </Routes>
    </div>
  );
}

export default App;

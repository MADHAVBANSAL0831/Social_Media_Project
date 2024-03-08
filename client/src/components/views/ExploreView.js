import React, { useEffect, useState } from "react";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import PostBrowser from "../PostBrowser";

const ExploreView = () => {
  return (
    <div className="navBox">
      <Navbar />
      <div className="box">
      <GridLayout
        left={<PostBrowser createPost contentType="posts" className="postCard"/>}
        right={<Sidebar />}
      />
      </div>
    </div>
  );
};

export default ExploreView;

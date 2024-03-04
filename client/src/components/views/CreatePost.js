import React from "react";
import GoBack from "../GoBack";
import GridLayout from "../GridLayout";
import Navbar from "../Navbar";
import PostEditor from "../PostEditor";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const CreatePostView = () => {
  return (
    <div className="navBox">
      {/* <Navbar /> */}
      <GoBack />
      <div className="box" >
      <GridLayout left={<PostEditor />} right={<Sidebar />} />
      </div>
      <Footer/>
    </div>
  );
};

export default CreatePostView;

const mongoose = require("mongoose");
const Post = require("../models/Post");
const User = require("../models/User");
// const Comment = require("../models/Comment");
const PostLike = require("../models/PostLike");
// const paginate = require("../util/paginate");

// USER_LIKES_PAGE_SIZE = 9;

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    if (!(title && content)) {
      throw new Error("All input required");
    }

    const post = await Post.create({
      title,
      content,
      poster: userId,
    });

    res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};




const updatePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const { content, userId, isAdmin } = req.body;
  
      const post = await Post.findById(postId);
  
      if (!post) {
        throw new Error("Post does not exist");
      }
  
      if (post.poster != userId && !isAdmin) {
        throw new Error("Not authorized to update post");
      }
  
      post.content = content;
      post.edited = true;
  
      await post.save();
  
      return res.json(post);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  };

  const deletePost = async (req, res) => {
    try {
      const postId = req.params.id;
      const { userId, isAdmin } = req.body;
  
      const post = await Post.findById(postId);
  
      if (!post) {
        throw new Error("Post does not exist");
      }
  
      if (post.poster != userId && !isAdmin) {
        throw new Error("Not authorized to delete post");
      }
  
      await post.deleteOne();
  
      await Comment.deleteMany({ post: post._id });
  
      return res.json(post);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err.message });
    }
  };

  
  
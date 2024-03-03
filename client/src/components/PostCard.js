import {
    Button,
    Card,
    IconButton,
    Stack,
    Typography,
    useTheme,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { AiFillCheckCircle, AiFillEdit, AiFillMessage } from "react-icons/ai";
  import { MdOutlineEdit } from "react-icons/md";
  import { BiMessageSquareDetail } from "react-icons/bi";
  import { useNavigate } from "react-router-dom";
  import { deletePost, likePost, unlikePost, updatePost } from "../api/posts";
  import { isLoggedIn } from "../helpers/authHelper";
  import ContentDetails from "./ContentDetails";
  
  import LikeBox from "./LikeBox";
  import PostContentBox from "./PostContentBox";
  import HorizontalStack from "./util/HorizontalStack";
  
  import {} from "react-icons/ai";
  import ContentUpdateEditor from "./ContentUpdateEditor";
  import Markdown from "./Markdown";
  
  import "./postCard.css";
  import { MdCancel } from "react-icons/md";
  import { BiTrash } from "react-icons/bi";
  import { BsReplyFill } from "react-icons/bs";
  import UserLikePreview from "./UserLikePreview";

const PostCard = () => {
  return (
    <Card sx={{ padding: 0 }} className="post-card">
      <Box className={preview}>
        <HorizontalStack spacing={0} alignItems="initial">
          <Stack
            justifyContent="space-between "
            alignItems="center"
            spacing={1}
            sx={{
              backgroundColor: "grey.100",
              width: "50px",
              padding: theme.spacing(1),
            }}
          >

          {/* showing like on a post  */}
            <LikeBox
              likeCount={likeCount}
              liked={post.liked}
              onLike={handleLike}
            />

          </Stack>
          <PostContentBox clickable={preview} post={post} editing={editing}>
            <HorizontalStack justifyContent="space-between" className="bottom">
              {/* showing username, time at post created  */}
              <ContentDetails
                username={post.poster.username}
                createdAt={post.createdAt}
                edited={post.edited}
                preview={preview === "secondary"}
              />

              {/* edit and delete buttons */}
              <Box>
                {user &&
                  (isAuthor || user.isAdmin) &&
                  preview !== "secondary" && (
                    <HorizontalStack>
                      <IconButton
                        disabled={loading}
                        size="small"
                        onClick={handleEditPost}
                      >
                        {editing ? (
                          <MdCancel color={iconColor} />
                        ) : (
                          <MdOutlineEdit color={iconColor} />
                        )}
                      </IconButton>
                      <IconButton
                        disabled={loading}
                        size="small"
                        onClick={handleDeletePost}
                      >
                        {confirm ? (
                          <AiFillCheckCircle color={theme.palette.error.main} />
                        ) : (
                          <BiTrash color={theme.palette.error.main} />
                        )}
                      </IconButton>
                    </HorizontalStack>
                  )}
              </Box>
            </HorizontalStack>

            {/* title of post  */}
            <Typography
              variant="h5"
              gutterBottom
              sx={{ overflow: "hidden", mt: 1, maxHeight: 125 }}
              className="title"
            >
              <b>{post.title}</b>
            </Typography>

            {/* content of post */}
              {/* while editing  */}
            {preview !== "secondary" &&
              (editing ? (
                <ContentUpdateEditor
                  handleSubmit={handleSubmit}
                  originalContent={post.content}
                />
              ) : 
              {/* while seeing  */}
              (
                <Box
                  maxHeight={maxHeight}
                  overflow="hidden"
                  className="content"
                >
                  <Markdown content={post.content} />
                </Box>
              ))}

              <HorizontalStack sx={{ mt: 2 }} justifyContent="space-between">
              <HorizontalStack>
              <BiMessageSquareDetail />
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                >
                  {post.commentCount}
                </Typography>
              </HorizontalStack>
              <Box>
                <UserLikePreview
                  postId={post._id}
                  userLikePreview={post.userLikePreview}
                />
              </Box>
            </HorizontalStack>
          </PostContentBox>
        </HorizontalStack>
      </Box>
    </Card>

  );
};

export default PostCard;
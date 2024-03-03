import { Card, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import PostCard from "./PostCard";
import HorizontalStack from "./util/HorizontalStack";
import "react-icons/md";
import { MdLeaderboard } from "react-icons/md";

const TopPosts = () => {
  const [loading, setLoading] = usestate(true);
  const [posts, setPosts] = usestate(null);

  return (
    <Stack>
        <Card>
            <HorizontalStack>
                <MdLeaderboard />
                <Typography>Top Posts</Typography>
            </HorizontalStack>
        </Card>

        {!loading ? (
            posts && 
            posts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))
        ) : (
            <Loading/>
        )}
        
    </Stack>
  );
};

export default TopPosts;
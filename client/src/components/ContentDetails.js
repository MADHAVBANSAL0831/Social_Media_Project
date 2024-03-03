import { Avatar, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import Moment from "react-moment";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

const ContentDetails = ({username, createdAt, edited, preview}) => {
  return (
    <HorizontalStack sx={{}}>
        <UserAvatar width={40} height={40} username={username} />
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            <Link
            className="username"
            color="inherit"
            underline="hover"
            onClick={(e) => {
                e.stopPropagation();
            }}
            to={"/users/" + username}
            >
            <span className="username">
            {username}
            </span>
            </Link>
            {!preview && (
                <>
                {" "}
                · <Moment fromNow>{createdAt}</Moment> 
                {edited 
                && <>Edited</>
                }
                </>
            )}
        </Typography>
    </HorizontalStack>
  )
}

export default ContentDetails;
import React from "react";
import Post from "./Post/Post";
import useStyles from "./PostList.styles";

const PostList = () => {
  const classes = useStyles();
  return (
    <>
      <h1>POST</h1>
      <Post />
      <Post />
    </>
  );
};

export default PostList;

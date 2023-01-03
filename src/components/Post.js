// To create new data
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Post() {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const createPost = () => {
    axios
      .post(baseURL, { title: "Hello World!", body: "This is a new post" })
      .then((response) => setPost(response.data));
  };

  if (!post) return "No Post!";

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default Post;

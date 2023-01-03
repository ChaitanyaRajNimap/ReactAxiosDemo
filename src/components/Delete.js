import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Delete() {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const deletePost = () => {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post delted!");
      setPost(null);
    });
  };

  if (!post) return "No post!";

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default Delete;

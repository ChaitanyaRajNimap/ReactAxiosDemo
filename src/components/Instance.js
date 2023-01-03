import React, { useState, useEffect } from "react";
import axios from "axios";

// If you create an instance with the .create() method, Axios will remember that baseURL, plus other values you might want to specify for every request, including headers:
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function Instance() {
  const [post, setPost] = useState("");

  useEffect(() => {
    client.get("/1").then((response) => {
      setPost(response.data);
    });
  }, []);

  const deletePost = () => {
    client.delete("/1").then(() => {
      alert("Post deleted!");
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

export default Instance;

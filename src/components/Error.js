import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Error() {
  const [post, setPost] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${baseURL}/abcd`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!";

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
    </div>
  );
}

export default Error;

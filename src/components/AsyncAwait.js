import React, { useState, useEffect } from "react";
import axios from "axios";

//Async-await allows you to write much cleaner code without then and catch callback functions. Plus, code with async-await looks a lot like synchronous code, and is easier to understand.

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function AsyncAwait() {
  const [post, setPost] = useState("");

  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
    getPost();
  }, []);

  async function deletePost() {
    await client.delete("/1");
    alert("Post deleted!");
    setPost(null);
  }

  if (!post) return "No Post!";

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}

export default AsyncAwait;

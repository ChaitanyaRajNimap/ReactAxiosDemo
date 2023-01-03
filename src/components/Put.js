import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function Put() {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}/1`).then((response) => {
      setPost(response.data);
    });
  }, []);

  const updatePost = () => {
    axios
      .put(`${baseURL}/1`, {
        title: "The Future Pirate Kings Message",
        body: "Ore wa Monkey D. Luffy, kaizoku ou ni naru otoko da!",
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  if (!post) return "No post!";

  console.log(post);

  return (
    <div>
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}

export default Put;

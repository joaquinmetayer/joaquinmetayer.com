"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

export default function SendEmail() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      await axios.request({
        url: "/api/delete-post",
        method: "DELETE",
        //data: { title: deleteTitle },
      });
      //await handleCommit(`delete post ${deleteTitle}`);
      setMessage("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting the post:", error);
      setMessage("Error deleting the post");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 2500);
    }
  };

  const handleCommit = async (gitMessage: string) => {
    await fetch("/api/git-commit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gitMessage }),
    });
  };

  return (
    <>
      <p>
        <input
          type="text"
          placeholder="New post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={isLoading}
        />
      </p>
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={isLoading}
      />
      <p>
        <button onClick={handleSave} disabled={isLoading}>
          Publish
        </button>
      </p>
      {message.length > 0 && <p> {message}</p>}
    </>
  );
}

"use client";
import React, { useState } from "react";
import axios from "axios";

export default function MakePush() {
  const [commitMessage, setCommitMessage] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleCommitPush = async () => {
    setIsLoading(true);
    const date: any = new Date();
    setCommitMessage(date);
    try {
      await axios.post("/api/git-commit", { gitMessage: commitMessage });

      setMessage("Changes committed and pushed successfully");
    } catch (error) {
      console.error("Error during git commit and push:", error);
      setMessage("Error during git commit and push");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p>
        <button onClick={handleCommitPush} disabled={isLoading}>
          Commit & Push
        </button>
      </p>
      {message.length > 0 && <p>{message}</p>}
    </>
  );
}

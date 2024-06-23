"use client";
import React, { useState } from "react";
import axios from "axios";

export default function SendEmail() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/send-email", {
        to,
        subject,
        text,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("Error sending email");
    } finally {
      setIsLoading(false);
      setTo("");
      setSubject("");
      setText("");
      setTimeout(() => {
        setMessage("");
      }, 2500);
    }
  };

  return (
    <>
      <p>
        <input
          type="text"
          placeholder="Recipient emails (comma separated)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          disabled={isLoading}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={isLoading}
        />
      </p>
      <p>
        <textarea
          placeholder="Email text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={isLoading}
        />
      </p>
      <p>
        <button onClick={handleSendEmail} disabled={isLoading}>
          Send Email
        </button>
      </p>
      {message.length > 0 && <p> {message}</p>}
    </>
  );
}

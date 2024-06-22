"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

export default function HeroImage() {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    if (/\.(png|jpe?g)$/i.test(file.name)) {
      setImage(file);
    } else {
      setMessage("Please select a valid image file (png or jpg/jpeg)");
    }
  };

  const handleUpload = async () => {
    if (!image) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image, image.name);

    try {
      const uploadResponse = await axios.post(
        "/api/change-image",
        formData
      );
      if (uploadResponse.status !== 200) {
        throw new Error("Error uploading image");
      }
      await handleCommit(`new hero image ${image.name}`);
      setMessage("Image uploaded and URL updated successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
      setMessage("Error uploading image");
    } finally {
      setIsLoading(false);
      setImage(null);
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
        <label
          htmlFor="imageUpload"
          style={{ cursor: "pointer", textDecoration: "underline" }}
        >
          Select hero image
        </label>
        <input
          type="file"
          id="imageUpload"
          onChange={handleImageChange}
          style={{ display: "none" }}
          disabled={isLoading}
        />
      </p>
      {image && <p>Selected image: {image.name}</p>}
      <p>
        <button onClick={handleUpload} disabled={isLoading || !image}>
          Upload Hero Image
        </button>
      </p>
      {message.length > 0 && <p>{message}</p>}
    </>
  );
}

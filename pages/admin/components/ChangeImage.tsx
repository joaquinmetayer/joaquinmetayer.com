"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

export default function HeroImage() {
  const [image, setImage] = useState<File | null>(null);
  const [heroWidth, setHeroWidth] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
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

  const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeroWidth(e.target.value);
  };

  const handleVisibilityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsVisible(e.target.checked);
  };

  const handleUpload = async () => {
    if (!image) return;

    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", image, image.name);
    formData.append("heroWidth", heroWidth);
    formData.append("isVisible", JSON.stringify(isVisible));

    try {
      const uploadResponse = await axios.post("/api/change-image", formData);
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
      setHeroWidth("");
      setIsVisible(false);
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
        <input
          placeholder="Hero width"
          type="text"
          id="heroWidth"
          value={heroWidth}
          onChange={handleWidthChange}
          disabled={isLoading}
        />
      </p>
      <p style={{ display: "flex", alignItems: "center" }}>
        <label htmlFor="isVisible">Is visible: </label>{" "}
        <input
          type="checkbox"
          id="isVisible"
          checked={isVisible}
          onChange={handleVisibilityChange}
          disabled={isLoading}
          style={{ width: "auto" }}
        />
      </p>
      <p>
        <button onClick={handleUpload} disabled={isLoading || !image}>
          Upload Hero Image
        </button>
      </p>
      {message.length > 0 && <p>{message}</p>}
    </>
  );
}

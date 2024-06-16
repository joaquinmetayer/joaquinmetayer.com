"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

interface ImageFile {
  name: string;
  file: File;
}

const AdminPanel: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [isLocal, setIsLocal] = useState(false);
  const [images, setImages] = useState<ImageFile[]>([]);

  useEffect(() => {
    setIsLocal(
      typeof window !== "undefined" &&
        window.location.href === "http://localhost:3000/admin"
    );
    const savedTitle = localStorage.getItem("jmjmtitle");
    const savedContent = localStorage.getItem("jmcontent");
    const savedImages = localStorage.getItem("jmimages");

    if (savedTitle) setTitle(savedTitle);
    if (savedContent) setContent(savedContent);
    if (savedImages) setImages(JSON.parse(savedImages));
  }, []);

  useEffect(() => {
    localStorage.setItem("jmtitle", title);
    localStorage.setItem("jmcontent", content);
    localStorage.setItem("jmimages", JSON.stringify(images));
  }, [title, content, images]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = Array.from(e.target.files as FileList);
    const selectedImages: ImageFile[] = fileList
      .filter((file) => /\.(png|jpe?g)$/i.test(file.name))
      .map((file) => ({
        name: file.name,
        file: file,
      }));
    setImages(selectedImages);
  };

  const handleClearImages = () => {
    setImages([]);
  };

  const handleCopyToClipboard = (imageName: string) => {
    navigator.clipboard.writeText(imageName);
  };

  const handleSave = async () => {
    try {
      let modifiedContent = content;
      const regex = /(\b[\w-]+\.(png|jpe?g)\b)/g;
      const matches = new Set(modifiedContent.match(regex));

      if (matches) {
        matches.forEach((match) => {
          const imageExists = images.find((image) => image.name === match);
          if (imageExists) {
            modifiedContent = modifiedContent.replace(
              new RegExp(`\\b${match}\\b`, "g"),
              `<a href="/images/${match}" target="_blank"><img src="/images/${match}" alt="${match}" /></a>`
            );
          }
        });
      }
      const currentDate = new Date();
      const day = String(currentDate.getDate());
      const month = String(currentDate.getMonth() + 1);
      const year = currentDate.getFullYear().toString();
      const formattedDate = `${day} ${month} ${year}`;
      const formattedFilename = `${day}${month}${year}`;
      const formData = new FormData();

      formData.append("filename", formattedFilename);
      formData.append("title", title);
      formData.append("date", formattedDate);
      formData.append("content", modifiedContent);

      await axios.post("/api/markdown", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Post creado exitosamente");
      clearData();
    } catch (error) {
      console.error("Error al crear post:", error);
      setMessage("Error al crear post");
    }
  };
  const clearData = () => {
    setTitle("");
    setContent("");
    setImages([]);
    localStorage.removeItem("jmtitle");
    localStorage.removeItem("jmcontent");
    localStorage.removeItem("jmimages");
  };
  return (
    <>
      {isLocal ? (
        <div>
          <p>
            <input
              type="text"
              placeholder="Titulo contenido"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button>
              <label htmlFor="imageUpload">Seleccionar imágenes</label>
            </button>
            <input
              type="file"
              id="imageUpload"
              multiple
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            {images.length > 0 && (
              <button onClick={handleClearImages} className="margin-left">
                Borrar imágenes
              </button>
            )}
            <button onClick={handleSave} className="margin-left">
              Guardar
            </button>{" "}
          </p>
          <p>{message.length > 0 && message}</p>
          {images.length > 0 && (
            <div>
              {images.map((image, index) => (
                <p key={index}>
                  <b
                    className="copy"
                    onClick={() => handleCopyToClipboard(image.name)}
                  >
                    COPIAR
                  </b>{" "}
                  {image.name}{" "}
                </p>
              ))}
            </div>
          )}
          <p></p>
          <textarea
            placeholder="Contenido del post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      ) : (
        <p>Panel administrador solo si te encuentras en localhost!</p>
      )}
    </>
  );
};

export default AdminPanel;

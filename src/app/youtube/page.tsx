"use client";
import React, { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.location.href =
      "https://www.youtube.com/channel/UChepHxgZmukOteW-6c796wQ";
  }, []);
  return (
    <div className="bg-black h-screen overflow-hidden flex justify-center items-center w-full tracking-tighter text-white">
      Redireccionando...
    </div>
  );
}

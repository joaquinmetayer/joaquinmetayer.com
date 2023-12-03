"use client";
import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    window.location.href = "./not-found.html";
  }, []);
  return <h1>HELLO LITTE STALKER</h1>;
};

export default NotFoundPage;

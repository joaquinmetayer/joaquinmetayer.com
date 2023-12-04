"use client";
import React, { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    window.location.href = "./not-found.html";
  }, []);
  return <span>Hello stalker, this is a bad 404 not found page, for this reason I decide add a Dino amazing game in this case. If don see the dino, <a href="/">click here</a>.</span>;
};

export default NotFoundPage;

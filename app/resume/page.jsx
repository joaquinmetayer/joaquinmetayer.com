"use client";
import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    window.location.href = "./resume.pdf";
  }, []);
  return <span>Redirecting to resume...</span>;
};

export default Resume;

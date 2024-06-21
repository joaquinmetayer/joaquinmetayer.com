"use client";
import React, { useState, useEffect } from "react";
import AdminPanel from "./components/AdminPanel";
import "./admin.css";
import Link from "next/link";

const Admin: React.FC = () => {
  const [isLocal, setIsLocal] = useState(false);

  useEffect(() => {
    setIsLocal(
      typeof window !== "undefined" &&
        window.location.href.startsWith("http://localhost")
    );
  }, []);

  return (
    <>
      <h1>
        <Link href={"/"}>Joaquin Metayer</Link>
      </h1>
      {isLocal ? (
        <>
          <AdminPanel />
        </>
      ) : (
        <p>Administrator panel only in localhost!</p>
      )}
    </>
  );
};

export default Admin;

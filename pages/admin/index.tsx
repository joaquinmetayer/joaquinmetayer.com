import React, { useState, useEffect } from "react";
import "./admin.css";
import Link from "next/link";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";
import EditLinks from "./components/EditLinks";

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
      <p>
        <Link href="/">joaquinmetayer</Link>
        {" / "}
        <Link href="/admin">admin</Link>
      </p>
      <hr />
      {isLocal ? (
        <>
          <CreatePost />
          <DeletePost />
          <EditLinks />
        </>
      ) : (
        <p>Administrator panel only in localhost</p>
      )}
    </>
  );
};

export default Admin;

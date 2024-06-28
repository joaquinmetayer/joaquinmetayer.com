import React, { useState, useEffect } from "react";
import "./admin.css";
import AdminLayout from "./components/Layout";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";
import MakePush from "./components/MakePush";

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
      <AdminLayout>
        {isLocal ? (
          <>
            <MakePush />
            <CreatePost />
            <DeletePost />
          </>
        ) : (
          <p>Administrator panel only in localhost</p>
        )}
      </AdminLayout>
    </>
  );
};

export default Admin;

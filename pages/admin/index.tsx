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
            <CreatePost />
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
            <DeletePost />
            <MakePush />
            </div>
          </>
        ) : (
          <p>Administrator panel only in localhost</p>
        )}
      </AdminLayout>
    </>
  );
};

export default Admin;

import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import CreatePost from "./CreatePost";
import DeletePost from "./DeletePost";
import EditLinks from "./EditLinks";

export default function AdminPanel() {
  return (
    <>
      <CreatePost />
      <DeletePost />
      <EditLinks/>
    </>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { ImageIcon, VideoIcon, ChevronDown, BookImage } from "lucide-react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

export default function AdminUploadPanel() {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [banner, setBanner] = useState(null);
  const [video, setVideo] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const dropdownRef = useRef(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before proceeding
    if (
      !title ||
      !description ||
      !thumbnail ||
      !video ||
      !banner ||
      !selectedLanguage ||
      !selectedCategory
    ) {
      alert("Please fill all fields!");
      return;
    }

    // Create FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail); // must be File type
    formData.append("banner", banner);
    formData.append("video", video);
    formData.append("language", selectedLanguage);
    formData.append("category", selectedCategory);

    try {
      // Option 1: Using fetch with proper headers
      const response = await fetch(
        "https://tv-server-1.onrender.com/api/upload",
        {
          method: "POST",
          body: formData,
          // Don't set Content-Type header when sending FormData
          // The browser will automatically set the correct Content-Type with boundary
        }
      );

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Upload response:", result);

      alert("Video uploaded successfully!");

      // Clear form
      setTitle("");
      setDescription("");
      setThumbnail(null);
      setBanner(null);
      setVideo(null);
      setSelectedLanguage("");
      setSelectedCategory("");
    } catch (error) {
      console.error("Upload failed:", error);
      alert(`Video upload failed: ${error.message}`);
    }
  };
  return (
    <div>
      <AdminSidebar/>
    </div>
  );
}
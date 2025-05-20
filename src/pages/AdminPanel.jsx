import React, { useState, useEffect, useRef } from "react";
import { ImageIcon, VideoIcon, ChevronDown, BookImage } from "lucide-react";
import axios from "axios";

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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Admin Video Upload
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" ref={dropdownRef}>
          {/* Title */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Video Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              required
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Thumbnail Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="thumbnail-upload"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-xl cursor-pointer transition"
              >
                <ImageIcon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Choose Thumbnail</span>
              </label>
              {thumbnail && (
                <span className="text-sm text-green-600">{thumbnail.name}</span>
              )}
              <input
                id="thumbnail-upload"
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          {/* Banner Upload */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Banner Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="banner-upload"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-xl cursor-pointer transition"
              >
                <BookImage className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Choose Banner</span>
              </label>
              {banner && (
                <span className="text-sm text-green-600">{banner.name}</span>
              )}
              <input
                id="banner-upload"
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setBanner(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          {/* Video Upload */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Video File <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-3">
              <label
                htmlFor="video-upload"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 border rounded-xl cursor-pointer transition"
              >
                <VideoIcon className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Choose Video</span>
              </label>
              {video && (
                <span className="text-sm text-green-600">{video.name}</span>
              )}
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={(e) => setVideo(e.target.files[0])}
                className="hidden"
              />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="mt-8 space-y-4 flex gap-10">
            {/* Language Dropdown */}
            <div className="relative w-1/2">
              <div
                onClick={() => toggleMenu("language")}
                className="cursor-pointer p-2 bg-gray-200 rounded flex justify-between items-center"
              >
                {selectedLanguage || (
                  <span className="text-gray-700">
                    Select Language <span className="text-red-500">*</span>
                  </span>
                )}
                <ChevronDown />
              </div>
              {openMenu === "language" && (
                <div className="absolute mt-1 bg-white border rounded shadow p-2 cursor-pointer w-full z-10">
                  {[
                    "English",
                    "Hindi",
                    "Telugu",
                    "Tamil",
                    "Kannada",
                    "Bhojpuri",
                    "Malayalam",
                  ].map((lang) => (
                    <div
                      key={lang}
                      onClick={() => {
                        setSelectedLanguage(lang);
                        setOpenMenu(null);
                      }}
                      className="hover:bg-gray-100 p-1 rounded"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative w-1/2">
              <div
                onClick={() => toggleMenu("category")}
                className="cursor-pointer p-2 bg-gray-200 rounded flex justify-between items-center"
              >
                {selectedCategory || (
                  <span className="text-gray-700">
                    Select Category <span className="text-red-500">*</span>
                  </span>
                )}
                <ChevronDown />
              </div>
              {openMenu === "category" && (
                <div className="absolute mt-1 bg-white border rounded shadow p-2 cursor-pointer w-full z-10">
                  {[
                    "Action",
                    "Sci-Fi",
                    "Comedy",
                    "Romance",
                    "Horror",
                    "Drama",
                    "Fantasy",
                  ].map((cat) => (
                    <div
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setOpenMenu(null);
                      }}
                      className="hover:bg-gray-100 p-1 rounded"
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button className="cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300">
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
}

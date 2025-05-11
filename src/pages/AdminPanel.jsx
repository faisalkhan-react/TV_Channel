import React, { useState } from "react";
import { ImageIcon, VideoIcon } from "lucide-react";

export default function AdminUploadPanel() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !thumbnail || !video) {
      alert("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);
    formData.append("video", video);

    // Simulate upload
    console.log("Uploading...", {
      title,
      description,
      thumbnail,
      video,
    });

    alert("Video uploaded successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Admin Video Upload
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Video Title
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Description
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
              Thumbnail Image
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
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Video File
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

          <button
            type="submit"
            className=" cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
}

import { useRef, useState } from "react";
import { ImageIcon, FileVideo2 } from "lucide-react";
import { useSelector } from "react-redux";
import { closeModal } from "../../../redux/Global_modal";
import { useDispatch } from "react-redux";

const AdminUpload = () => {
  const { isOpened } = useSelector((state) => state?.modal);
  const dispatch = useDispatch();

  const bannerInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);

  const handleClick = (inputRef) => {
    inputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(closeModal()); // close after we get some response from server
  };

  return (
    isOpened && (
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#0F172A] text-white overflow-auto p-8">
        <div className="max-w-5xl mx-auto bg-[#1E293B] p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold mb-8">Upload Movie</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <textarea
                name="cast"
                placeholder="Cast (comma separated)"
                value={formData.cast}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="director"
                placeholder="Director"
                value={formData.director}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="trailerUrl"
                placeholder="Trailer URL"
                value={formData.trailerUrl}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* <!-- Cast & Crew --> */}
            <div class="flex-col flex">
              <textarea
                id="cast"
                placeholder="Enter cast/crew
              "
                className="bg-[#1E293B] p-2 rounded"
              ></textarea>
            </div>

            {/* <!-- Category Dropdown --> */}
            <div className="">
              <label className="font-semibold">Select Categories</label>
              <div class="space-x-4 mt-2">
                <label>
                  <input type="checkbox" /> Action
                </label>
                <label>
                  <input type="checkbox" /> Drama
                </label>
                <label>
                  <input type="checkbox" /> Thriller
                </label>
                <label>
                  <input type="checkbox" /> Romance
                </label>
                <label>
                  <input type="checkbox" /> Sci-Fi
                </label>
                <label>
                  <input type="checkbox" /> Horror
                </label>
              </div>
            </div>

            <input
              name="tags"
              placeholder="Tags (comma separated)"
              value={formData.tags.join(",")}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  tags: e.target.value.split(","),
                }))
              }
              className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="grid grid-cols-3 gap-4">
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600"
              >
                {[
                  "english",
                  "hindi",
                  "tamil",
                  "telugu",
                  "malayalam",
                  "bhojpuri",
                  "kannada",
                ].map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>

              <select
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600"
              >
                <option value="movie">Movie</option>
                <option value="series">Series</option>
              </select>
            </div>

            <div>
              <label className="font-semibold block mb-2">Quality Links</label>
              <div className="grid grid-cols-2 gap-4">
                {["720p", "1080p", "2K", "4K"].map((res) => (
                  <input
                    key={res}
                    name={`qualityLinks.${res}`}
                    placeholder={`${res} Link`}
                    value={formData.qualityLinks[res]}
                    onChange={handleInputChange}
                    className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { label: "Free to Watch", name: "isFree" },
                { label: "Published", name: "isPublished" },
                { label: "Featured", name: "featured" },
                { label: "Trending", name: "trending" },
              ].map(({ label, name }) => (
                <label key={name} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={name}
                    checked={formData[name]}
                    onChange={handleInputChange}
                  />
                  {label}
                </label>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="releaseYear"
                placeholder="Release Year"
                value={formData.releaseYear}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="duration"
                placeholder="Duration (e.g., 2hr 30min)"
                value={formData.duration}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="rating"
                type="number"
                placeholder="Rating (0-5)"
                min={0}
                max={5}
                value={formData.rating}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                name="views"
                type="number"
                placeholder="Views"
                value={formData.views}
                onChange={handleInputChange}
                className="w-full bg-[#1E293B] text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* File Uploads */}
            <div className="flex gap-8 pt-4">
              <div>
                <label className="block font-semibold mb-1">ThumbnailUrl</label>
                <div
                  className="w-28 h-20 bg-gray-700 rounded-md flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => handleClick(thumbnailInputRef)}
                >
                  <ImageIcon className="text-gray-300" />
                  <span className="text-xs text-gray-300">Upload</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  ref={thumbnailInputRef}
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "thumbnailUrl")}
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">BannerUrl</label>
                <div
                  className="w-28 h-20 bg-gray-700 rounded-md flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => handleClick(bannerInputRef)}
                >
                  <FileVideo2 className="text-gray-300" />
                  <span className="text-xs text-gray-300">Upload</span>
                </div>
                <input
                  type="file"
                  accept="image/*,video/*"
                  ref={bannerInputRef}
                  className="hidden"
                  onChange={(e) => handleFileChange(e, "bannerUrl")}
                />
              </div>
            </div>

            <div className="pt-6 flex gap-4">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm font-semibold"
              >
                Upload Media
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    title: "",
                    description: "",
                    genre: [],
                    language: "english",
                    releaseDate: "",
                    cast: "",
                    director: "",
                    bannerUrl: null,
                    thumbnailUrl: null,
                    trailerUrl: "",
                    duration: "",
                    isPublished: false,
                    views: 0,
                    rating: "",
                    isFree: false,
                    releaseYear: "",
                    type: "movie",
                    featured: false,
                    trending: false,
                    tags: [],
                    qualityLinks: {
                      "720p": "",
                      "1080p": "",
                      "2K": "",
                      "4K": "",
                    },
                  })
                }
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-sm font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AdminUpload;

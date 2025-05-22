import React from "react";
import AdminSidebar from "../AdminSidebar";
import { useRef, useState } from "react";
import { ImageIcon, FileVideo2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const AdminSeries = () => {
  const { isOpened } = useSelector((state) => state?.modal);

  const bannerInputRef = useRef(null);
  const thumbnailInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (inputRef) => {
    inputRef.current.click();
  };

  const [formData, setFormData] = useState({
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
    views: "",
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
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith("qualityLinks.")) {
      const resolution = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        qualityLinks: { ...prev.qualityLinks, [resolution]: value },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleCheckboxChange = (e, field) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev[field], value]
        : prev[field].filter((item) => item !== value);
      return { ...prev, [field]: updated };
    });
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Submit to backend API

    // dispatch(uploadMovie(formData));

    // dispatch(closeModal());
  };

  return (
    <div>
      isOpened && (
      <div className="fixed top-0 left-0 w-screen h-full z-50 bg-[#f1f1f1]  overflow-auto p-8">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-3xl font-bold mb-8">Upload Series</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />

            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full bg-gray-200  p-2 rounded border outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />

            <div className="grid grid-cols-2 gap-4">
              <textarea
                name="cast"
                placeholder="Cast (comma separated)"
                value={formData.cast}
                onChange={handleInputChange}
                 className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <input
                name="director"
                placeholder="Director"
                value={formData.director}
                onChange={handleInputChange}
                 className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                name="trailerUrl"
                placeholder="Trailer URL"
                value={formData.trailerUrl}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />

              <input
                type="date"
                name="releaseDate"
                placeholder="dd--mm-yyyy"
                value={formData.releaseDate}
                onChange={handleInputChange}
               className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 cursor-pointer"
              />
            </div>

            <div>
              <label className="font-semibold">Genre</label>
              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  "Action",
                  "Drama",
                  "Thriller",
                  "Romance",
                  "Sci-Fi",
                  "Horror",
                ].map((cat) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer">
                    <input
                    className="cursor-pointer"
                      type="checkbox"
                      value={cat}
                      checked={formData.genre.includes(cat)}
                      onChange={(e) => handleCheckboxChange(e, "genre")}
                    />
                    {cat}
                  </label>
                ))}
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
 className="w-full bg-gray-200 p-2 rounded  outline-none border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />

            <div className="grid grid-cols-3 gap-4">
              <select
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="w-full bg-gray-200 p-2 rounded border border-gray-300 outline-none"
              >
                {[
                  "English",
                  "Hindi",
                  "Tamil",
                  "Telugu",
                  "Malayalam",
                  "Bhojpuri",
                  "Kannada",
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
                className="w-full bg-gray-200 p-2 rounded border border-gray-300 outline-none"
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
                    className="w-full bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none focus:ring-1  focus:ring-gray-500 outline-none"
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
                <label key={name} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={name}
                    checked={formData[name]}
                    onChange={handleInputChange}
                    className="cursor-pointer"
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
                className="w-full bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              />
              <input
                name="duration"
                placeholder="Duration (e.g., 2hr 30min)"
                value={formData.duration}
                onChange={handleInputChange}
className="w-full bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"              />
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
className="w-full bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"              />
              <input
                name="views"
                type="number"
                placeholder="Views"
                value={formData.views}
                onChange={handleInputChange}
className="w-full bg-gray-200 p-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"              />
            </div>

            {/* File Uploads */}
            <div className="flex gap-8 pt-4">
              <div>
                <label className="block font-semibold mb-1 text-center">
                  Thumbnail
                </label>
                <div
                  className="w-28 h-20 bg-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => handleClick(thumbnailInputRef)}
                >
                  <ImageIcon className="text-black" />
                  <span className="text-xs font-semibold text-black">Upload</span>
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
                <label className="block font-semibold mb-1 text-center">Banner </label>
                <div
                  className="w-28 h-20 bg-gray-300 rounded-md flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => handleClick(bannerInputRef)}
                >
                  <FileVideo2 className="text-black" />
                  <span className="text-xs text-black font-semibold">Upload</span>
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
                type="submit"
                className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-sm font-semibold text-white"
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
                className="bg-red-500 hover:bg-red-700 px-6 py-2 rounded text-sm font-semibold text-white cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      )
    </div>
  );
};

export default AdminSeries;

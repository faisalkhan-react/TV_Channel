import { useRef } from "react";
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
      <div className=" bg-[#0F172A] text-white fixed top-0 p-2 left-0 z-100 w-screen h-screen flex justify-center items-center ">
        {/*-- Admin Upload Panel -->*/}
        <div class="">
          <h2 className="text-center font-bold text-2xl">Upload Movies</h2>

          <form class="space-y-3 p-6">
            {/* <!-- Title Input --> */}
            <div class=" flex flex-col ">
              <input
                type="text"
                id="title"
                placeholder="Enter movie title"
                className="bg-[#1E293B] p-2 rounded"
              />
            </div>

            {/* <!-- Description --> */}
            <div class="flex flex-col">
              <textarea
                id="description"
                placeholder="Movie description"
                className="bg-[#1E293B] p-2 rounded"
              ></textarea>
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

            {/* <!-- Language Dropdown --> */}
            <div className="space-x-2">
              <span className="space-x-2">
                <label className="font-semibold ">Select Language</label>
                <select className="bg-[#1E293B] p-2 rounded w-30">
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="bhojpuri">Bhojpuri</option>
                  <option value="tamil">Tamil</option>
                  <option value="telugu">Telugu</option>
                  <option value="kannada">Kannada</option>
                  <option value="malayalam">Malayalam</option>
                </select>
              </span>
              {/* <!-- Free to Watch --> */}
              <span className="space-x-2">
                <label className="font-semibold">Free Watch ?</label>
                <select className="bg-[#1E293B] p-2 rounded">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </span>

              {/* <!-- Qualty Dropdown --> */}
              <span className="space-x-2">
                <label className="font-semibold"> Quality</label>
                <select className="bg-[#1E293B] p-2 rounded ">
                  <option value="720p">720p</option>
                  <option value="1080p">1080p</option>
                  <option value="2K">2K</option>
                  <option value="4K">4K</option>
                </select>
              </span>
            </div>

            {/* <!-- Release Info --> */}
            <div class="space-x-2">
              <span className="space-x-2">
                <label for="release-year" className="font-semibold">
                  Release Year
                </label>
                <input
                  type="text"
                  id="release-year"
                  placeholder="e.g., 2024"
                  className="bg-[#1E293B] p-2 rounded w-24"
                />
              </span>

              <span className="space-x-2 ml-2">
                <label className="font-semibold ml-20">Duration</label>
                <input
                  type="text"
                  placeholder="e.g., 2hr 15min"
                  className="bg-[#1E293B] p-2 rounded w-32"
                />
              </span>
              {/* <div>
                <label>Views</label>
                <input type="number" placeholder="e.g., 10000" />
              </div> */}
            </div>

            {/* <!-- Rating --> */}
            <div>
              <span class="space-x-2">
                <label for="rating" className=" font-semibold">
                  Rating
                </label>
                <input
                  type="text"
                  id="rating"
                  placeholder="e.g., 8.5"
                  className="bg-[#1E293B] p-2 rounded w-20"
                />
              </span>
              {/* <!-- Video Link --> */}
              <span class="space-x-2 ml-38">
                <label for="video-link" className="font-semibold">
                  Video Link
                </label>
                <input
                  type="url"
                  id="video-link"
                  placeholder="https://example.com/video.mp4"
                  required
                  className="bg-[#1E293B] p-2 rounded"
                />
              </span>
            </div>
            {/* <!-- Upload Files --> */}
            <div class="flex space-x-10">
              {/* Thumbnail Upload */}
              <span>
                <label className="font-semibold">Thumbnail</label>
                <span
                  className="w-26 h-20 bg-[#1E293B] rounded-md cursor-pointer flex flex-col justify-center items-center"
                  onClick={() => handleClick(thumbnailInputRef)}
                >
                  <ImageIcon className="w-6 h-6 text-slate-400" />
                  <span className="text-slate-400 text-xs mt-1">Thumbnail</span>
                </span>
                <input
                  type="file"
                  accept="image/*"
                  ref={thumbnailInputRef}
                  className="hidden"
                />
              </span>

              {/* Banner Upload */}
              <span>
                <label className="font-semibold">Banner</label>
                <span
                  className="w-26 h-20 bg-[#1E293B] rounded-md cursor-pointer flex flex-col justify-center items-center"
                  onClick={() => handleClick(bannerInputRef)}
                >
                  <FileVideo2 className="w-6 h-6 text-slate-400" />
                  <span className="text-slate-400 text-xs mt-1">Banner</span>
                </span>
                <input
                  type="file"
                  accept="image/*,video/*"
                  ref={bannerInputRef}
                  className="hidden"
                />
              </span>
            </div>

            {/* <!-- Submit Button --> */}
            <div class="">
              <button
                onClick={(e) => handleSubmit(e)}
                type="submit"
                className="cursor-pointer bg-blue-600 p-2 rounded text-sm font-semibold "
              >
                Upload Video
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default AdminUpload;

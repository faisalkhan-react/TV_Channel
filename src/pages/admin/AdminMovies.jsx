import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminMovies = () => {
  return (
    <div className="flex ">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        <div className="w-[90%] border">
          <div className="p-8 w-4/6  sm:w-4/6">
            <div>
              <h2 className="text-2xl font-semibold">Movies</h2>
            </div>
            <div className="mt-4 border-1 border-gray-300">
              <input
                type="search"
                placeholder="Search"
                className="p-2 rounded-xl outline-none"
              />
            </div>
            <div className="space-y-6 mt-6 text-md">
              <h2 className="">Avengers Endgame</h2>
              <h2>Avengers Endgame</h2>
              <h2>Avengers Endgame</h2>
              <h2>Avengers Endgame</h2>
              <h2>Avengers Endgame</h2>
            </div>
          </div>
          {/* <div className="w-1/6 bg-[#0F172A] p-8">
            <button
              type="submit"
              className="bg-[#1e2295] p-2 rounded font-semibold text-white cursor-pointer text-sm "
            >
              Upload
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdminMovies;

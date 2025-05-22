import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminSeries = () => {
  return (
    <div className="flex ">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        <div className="w-[90%] border">
          <div className="p-8 w-4/6  sm:w-4/6">
            <div>
              <h2 className="text-2xl font-semibold">Series</h2>
            </div>
            <div className="mt-4">
              <input
                type="search"
                placeholder="Search"
                className="p-2 outline-none rounded border border-gray-300"
              />
            </div>
            <div className="space-y-6 mt-6 text-md">
              <h2 className="">The Last of Us (HBO)</h2>
              <h2>Stranger Things (Netflix)</h2>
              <h2>House of the Dragon (HBO)</h2>
              <h2>The Boys (Amazon Prime Video)</h2>
              <h2>Wednesday (Netflix)</h2>
              <h2>Squid Game (Netflix)</h2>
              <h2>Loki (Disney+)</h2>
              <h2>The Bear (Hulu/Disney+)</h2>
              <h2>One Piece (Netflix)</h2>
              <h2>Succession (HBO)</h2>
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

export default AdminSeries;

import React, { useState } from "react";
import {
  LayoutDashboard ,
  Clapperboard,
  Film,
  Tv,
  CircleUserRound,
  CloudUpload,
  ChartNoAxesCombined,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  const [isActiveTab, setIsActiveTab] = useState(false);
  return (
    <div className="flex">
      <div className="p-8 bg-[#0a142af5] text-white h-screen w-[300px]">
        <div>
          <h2 className="font-semibold text-2xl">Chitramcinema</h2>
        </div>
        <div className="space-y-2 mt-6 ">
          <Link
            to="/admin/dashboard"
            className="flex space-x-3 bg-[#1e293b] w-full p-4 rounded-xl  cursor-pointer"
          >
            <LayoutDashboard  />
            <p>Dashboard</p>
          </Link>
          <Link
            to="/admin/movies"
            className="flex space-x-3  w-full p-4 rounded-xl  cursor-pointer"
          >
            <Clapperboard />
            <p>Movies</p>
          </Link>
          <Link
            to="/admin/series"
            className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer"
          >
            <Film />
            <p>Series</p>
          </Link>
          <Link
            to="/admin/shows"
            className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer"
          >
            <Tv />
            <p>Shows</p>
          </Link>
          <Link
            to="/admin/analytics"
            className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer"
          >
            <ChartNoAxesCombined />
            <p>Analytics</p>
          </Link>
          <Link
            to="/admin/vendor"
            className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer"
          >
            <CloudUpload />
            <p>Vendor</p>
          </Link>

          <Link
            to="/admin/users"
            className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer"
          >
            <CircleUserRound />
            <p>Users</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

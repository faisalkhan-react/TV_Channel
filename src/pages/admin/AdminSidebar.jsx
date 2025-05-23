import {
  LayoutDashboard,
  Clapperboard,
  Film,
  Tv,
  CircleUserRound,
  CloudUpload,
  ChartNoAxesCombined,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <div className="flex">
      <div className="p-4 sm:p-6 bg-[#0a142af5] text-white h-screen  md:w-[300px]">
        <div>
          <Link to="/" className="font-semibold text-2xl hidden md:block">
            Chitramcinema
          </Link>
        </div>
        <div className="space-y-2 mt-6">
          <Link
            to="/admin/dashboard"
            className={`flex  ${
              location.pathname === "/admin/dashboard" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <LayoutDashboard />
            <p className="hidden md:block">Dashboard</p>
          </Link>
          <Link
            to="/admin/movies"
            className={`flex ${
              location.pathname === "/admin/movies" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <Clapperboard />
            <p className="hidden md:block">Movies</p>
          </Link>
          <Link
            to="/admin/series"
            className={`flex space-x-3 ${
              location.pathname === "/admin/series" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <Film />
            <p className="hidden md:block">Series</p>
          </Link>
          <Link
            to="/admin/shows"
            className={`flex space-x-3 ${
              location.pathname === "/admin/shows" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <Tv />
            <p className="hidden md:block">Shows</p>
          </Link>
          <Link
            to="/admin/analytics"
            className={`flex space-x-3 ${
              location.pathname === "/admin/analytics" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <ChartNoAxesCombined />
            <p className="hidden md:block">Analytics</p>
          </Link>
          <Link
            to="/admin/vendor"
            className={`flex space-x-3 ${
              location.pathname === "/admin/vendor" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <CloudUpload />
            <p className="hidden md:block">Vendor</p>
          </Link>

          <Link
            to="/admin/users"
            className={`flex space-x-3 ${
              location.pathname === "/admin/users" ? "bg-[#1e293b]" : ""
            } w-full p-4 rounded-xl  cursor-pointer`}
          >
            <CircleUserRound />
            <p className="hidden md:block">Users</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

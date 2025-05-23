import React, { useState, useEffect, useRef } from "react";
import { ImageIcon, VideoIcon, ChevronDown, BookImage } from "lucide-react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar.jsx";
import { adminDashboardResponse } from "../../constants/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/Global_modal.js";
import {
  getDashboardData,
  setDashboardData,
} from "../../redux/admin/actions/dashboard/dashboardSlice.jsx";
import { getDashboardDataApi } from "../../api/admin/dashboard.jsx";
import {
  RevenueChart,
  SubscriptionPieChart,
  ContentTypeBarChart,
  LanguageBarChart,
} from "./components/AllCharts.jsx";
import {
  Clapperboard,
  FileVideo,
  User,
  Eye,
  ChartNoAxesCombined,
} from "lucide-react";

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(null);
  const dropdownRef = useRef(null);
  const dashboardData = useSelector((state) => state.dashboard);
  const admin = useSelector((state) => state.admin.admin);
  const initialized = useSelector((state) => state.admin.initialized);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    if (initialized && admin) {
      dispatch(getDashboardData());
    }
  }, [initialized, admin]);

  if (!initialized) {
    return <p>Loading auth...</p>; // or <Spinner />
  }

  return (
    <div className="flex ">
      <AdminSidebar />

      <div className="dashboard_home bg-[#f1f1f1] w-full p-5">
        {/* // all the stats at top */}
        <div className="flex justify-between w-[90%]">
          <div className="flex justify-between gap-15 p-5 bg-white w-[75%] shadow-md rounded-lg">
            <div className="flex flex-col gap-1 ">
              <p className="text-lg">Total Movies</p>
              <div className="flex justify-between items-center">
                <div className="p-3 bg-[#d3eaea] rounded-lg">
                  <Clapperboard size={24} />
                </div>
                <p className="text-lg">
                  {dashboardData?.data?.summary?.totalMovies}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total Series</p>
              <div className="flex justify-between  items-center">
                <div className="p-3 bg-[#d8d7fc] rounded-lg">
                  <FileVideo size={24} />
                </div>

                <p className="text-lg">
                  {dashboardData?.data?.summary?.totalSeries}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total users</p>
              <div className="flex justify-between items-center">
                <div className="p-3 bg-[#cffdea] rounded-lg">
                  <User size={24} />
                </div>

                <p className="text-lg">
                  {dashboardData?.data?.summary?.totalUsers}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total views</p>
              <div className="flex justify-between items-center">
                <div className="p-3 bg-gray-100 rounded-lg mr-1">
                  <Eye size={24} />
                </div>
                <p className="text-lg">
                  {dashboardData?.data?.summary?.totalViews}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white shadow-md rounded-lg p-5 ml-5">
            <p className="text-lg">Total Subscriber</p>
            <div className="flex justify-between items-center">
              <div className="p-3 bg-[#ffe3e3] rounded-lg">
                <ChartNoAxesCombined size={24} />
              </div>
              <p className="text-lg">
                {dashboardData?.data?.summary?.activeSubscriptions}
              </p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="flex mt-5 w-[90%] justify-between">
          <RevenueChart data={dashboardData?.data?.charts?.revenueByMonth} />

          <SubscriptionPieChart
            data={dashboardData?.data?.charts?.subscriptionBreakdown}
          />
        </div>
        <div className="flex mt-5 w-[90%] justify-between"></div>

        {/* search functionality with all the filters
        <div className="search">search</div> */}

        {/* all the charts */}
      </div>
    </div>
  );
}

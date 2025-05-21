import React, { useState, useEffect, useRef } from "react";
import { ImageIcon, VideoIcon, ChevronDown, BookImage } from "lucide-react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";
import { adminDashboardResponse } from "../../constants/constant";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/Global_modal.js";
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
  MailCheck,
  ChartNoAxesCombined,
} from "lucide-react";

export default function AdminUploadPanel() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   // Validate before proceeding
  //   if (
  //     !title ||
  //     !description ||
  //     !thumbnail ||
  //     !video ||
  //     !banner ||
  //     !selectedLanguage ||
  //     !selectedCategory
  //   ) {
  //     alert("Please fill all fields!");
  //     return;
  //   }

  //   // Create FormData
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("description", description);
  //   formData.append("thumbnail", thumbnail); // must be File type
  //   formData.append("banner", banner);
  //   formData.append("video", video);
  //   formData.append("language", selectedLanguage);
  //   formData.append("category", selectedCategory);

  //   try {
  //     // Option 1: Using fetch with proper headers
  //     const response = await fetch(
  //       "https://tv-server-1.onrender.com/api/upload",
  //       {
  //         method: "POST",
  //         body: formData,
  //         // Don't set Content-Type header when sending FormData
  //         // The browser will automatically set the correct Content-Type with boundary
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Server responded with status: ${response.status}`);
  //     }

  //     const result = await response.json();
  //     console.log("Upload response:", result);

  //     alert("Video uploaded successfully!");

  //     // Clear form
  //     setTitle("");
  //     setDescription("");
  //     setThumbnail(null);
  //     setBanner(null);
  //     setVideo(null);
  //     setSelectedLanguage("");
  //     setSelectedCategory("");
  //   } catch (error) {
  //     console.error("Upload failed:", error);
  //     alert(`Video upload failed: ${error.message}`);
  //   }
  // };
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
                <p className="text-lg">120</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total Series</p>
              <div className="flex justify-between  items-center">
                <div className="p-3 bg-[#d8d7fc] rounded-lg">
                  <FileVideo size={24} />
                </div>

                <p className="text-lg">120</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total users</p>
              <div className="flex justify-between items-center">
                <div className="p-3 bg-[#cffdea] rounded-lg">
                  <User size={24} />
                </div>

                <p className="text-lg">120</p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-lg">Total views</p>
              <div className="flex justify-between items-center">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <Eye size={24} />
                </div>
                <p className="text-lg">120</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 bg-white shadow-md rounded-lg p-5 ml-5">
            <p className="text-lg">Total Subscriber</p>
            <div className="flex justify-between items-center">
              <div className="p-3 bg-[#ffe3e3] rounded-lg">
                <ChartNoAxesCombined size={24} />
              </div>
              <p className="text-lg">120</p>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="flex mt-5 w-[90%] justify-between">
          <RevenueChart
            data={adminDashboardResponse.data.charts.revenueByMonth}
          />

          <SubscriptionPieChart
            data={adminDashboardResponse.data.charts.subscriptionBreakdown}
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

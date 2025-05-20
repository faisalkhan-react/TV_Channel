import React from "react";
import {
  Clapperboard,
  Film,
  Tv,
  CircleUserRound,
  CloudUpload,
  ChartNoAxesCombined,
} from "lucide-react";

const AdminSidebar = () => {
  return (
    <div className="p-10 bg-[#0e1422] text-white h-screen w-screen ">
      <div>
        <h2 className="font-semibold text-2xl">Chitramcinema</h2>
      </div>
      <div className="space-y-2 mt-6 ">
        <div className="flex space-x-3 bg-[#1E293B] w-40 p-4 rounded-xl  cursor-pointer">
          <Clapperboard />
          <p>Movies</p>
        </div>
        <div className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer">
          <Film />
          <p>Series</p>
        </div>
        <div className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer">
          <Tv />
          <p>Shows</p>
        </div>
       <div className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer">
          <ChartNoAxesCombined />
          <p>Analytics</p>
        </div>
        <div className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer">
          <CloudUpload />
          <p>Vendor</p>
        </div>
        
         <div className="flex space-x-3 w-40 p-4 rounded-xl cursor-pointer">
          <CircleUserRound  />
          <p>Users</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;

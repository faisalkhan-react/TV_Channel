import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminUsers = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        {/*  Users Title */}
        <div className="flex gap-4 items-center border justify-between">
          <h2 className="font-semibold">Users</h2>
          <div className="flex border ">
            <div>
              <input
                type="search"
                placeholder="Search"
                className="outline-none bg-gray-400 p-1 rounded"
              />
            </div>
            <div className="items-center flex">
              <select name="" id="" className="text-sm font-semibold">
                <option value="all">All</option>
                <option value="">Title</option>
                <option value="">User Id</option>
                <option value="">Subscribed</option>
              </select>
            </div>
          </div>
        </div>

        {/*  Users Table */}
        <div></div>
      </div>
    </div>
  );
};

export default AdminUsers;

import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminUsers = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        {/*  Users Title */}
        <div className="flex gap-4 items-center justify-between ">
          <h2 className="font-semibold">Users</h2>
          <div className="flex">
            <div>
              <input
                type="search"
                placeholder="Search"
                className="outline-none bg-gray-400 p-1 rounded"
              />
            </div>
            <div className="items-center flex">
              <select name="" id="" className="text-sm font-semibold outline-none">
                <option value="all">All</option>
                <option value="">Title</option>
                <option value="">User Id</option>
                <option value="">Subscribed</option>
              </select>
            </div>
          </div>
        </div>

        {/*  Users Table */}
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className=" px-4 py-2 text-left">User Id</th>
                <th className=" px-4 py-2 text-left">Mobile Number</th>
                <th className=" px-4 py-2 text-left">Subscribed</th>
                <th className=" px-4 py-2 text-left">Plan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
              <tr>
                <td className=" px-4 py-2">54321</td>
                <td className=" px-4 py-2">+91 8051941891</td>
                <td className=" px-4 py-2">Yes</td>
                <td className=" px-4 py-2">Rs 1299</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;

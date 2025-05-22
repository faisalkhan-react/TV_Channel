import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminUsers = () => {
  const users = [
    {
      id: "54321",
      mobile: "+91 8051941891",
      subscribed: "Yes",
      plan: "Rs 1299",
    },
    {
      id: "12345",
      mobile: "+91 9876543210",
      subscribed: "Yes",
      plan: "Rs 999",
    },
    {
      id: "67890",
      mobile: "+91 9999999999",
      subscribed: "Yes",
      plan: "Rs 299",
    },
    {
      id: "11223",
      mobile: "+91 8888888888",
      subscribed: "Yes",
      plan: "Rs 99",
    },
    { id: "44556", mobile: "+91 7777777777", subscribed: "No", plan: "Free" },
  ];

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        {/*  Users Title */}
        <div className="flex gap-4 items-center justify-between">
          <h2 className="font-semibold text-xl">Users</h2>
          <div className="flex gap-1">
            <div>
              <input
                type="search"
                placeholder="Search"
                className="outline-none bg-gray-200 px-2 py-1 rounded border border-gray-300"
              />
            </div>
            <div className="items-center flex">
              <select
                name=""
                id=""
                className="text-sm font-semibold border border-gray-300 px-2 py-1.5 rounded"
              >
                <option value="all">All</option>
                <option value="">Title</option>
                <option value="">User Id</option>
                <option value="">Subscribed</option>
              </select>
            </div>
          </div>
        </div>

        {/*  Users Table */}
        <div className="rounded-md overflow-hidden shadow mt-4">
          <table className="table-auto w-full border-separate border-spacing-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">User Id</th>
                <th className="px-4 py-2 text-left">Mobile Number</th>
                <th className="px-4 py-2 text-left">Subscribed</th>
                <th className="px-4 py-2 text-left">Plan</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-4">{user.id}</td>
                  <td className="px-4 py-2">{user.mobile}</td>
                  <td className="px-4 py-2">{user.subscribed}</td>
                  <td className="px-4 py-2">{user.plan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;

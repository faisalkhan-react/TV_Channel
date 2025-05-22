import React from 'react'
import AdminSidebar from './AdminSidebar'

const AdminShows = () => {
  return (
    <div> <div className="flex ">
      <AdminSidebar />
      <div className="bg-[#f1f1f1] w-full p-5">
        <div className="w-[90%] border">
          <div className="p-8 w-4/6  sm:w-4/6">
            <div>
              <h2 className="text-2xl font-semibold">Shows</h2>
            </div>
            <div className="mt-4">
              <input
                type="search"
                placeholder="Search"
                className="p-2 outline-none rounded border border-gray-300"
              />
            </div>
            <div className="space-y-6 mt-6 text-md">
              <h2>Udne Ki Aasha – Star Plus</h2>
              <h2>Anupamaa – Star Plus</h2>
              <h2>Siragadikka Aasai – Tamil TV</h2>
              <h2>Mangal Lakshmi – Colors TV</h2>
              <h2>The Royals – Netflix</h2>
              <h2>Black Warrant – Netflix</h2>
              <h2>Khakee: The Bengal Chapter – Netflix</h2>
              <h2>Kanneda – JioHotstar</h2>
              <h2>Panchayat – Amazon Prime Video</h2>
              <h2>Aspirants – Amazon Prime Video</h2>
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
    </div></div>
  )
}

export default AdminShows
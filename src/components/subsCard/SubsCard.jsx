import React from "react";

const SubsCard = ({ plan, quality, device, price, month, planKey, handleClick }) => {
  return (
    <div className="flex justify-center">
      <div className="w-72 h-90 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 bg-white hover:bg-gradient-to-br from-[#080137] to-[#442bc3] text-black hover:text-white p-4 flex flex-col">
        
        {/* Plan Header */}
        <div className="flex justify-center p-3 rounded-xl bg-gradient-to-br from-[#2b2c7c] to-[#0e6de9] text-white font-semibold mt-2">
          <p>{plan}</p>
        </div>

        {/* Plan Details */}
        <div className="text-base mt-4 space-y-2 text-center flex-1">
          <p>Quality : {quality}</p>
          <p>Device Access : {device}</p>
          <p>Rs {price} per {month}</p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button 
            onClick={() => handleClick(planKey, plan, device)}
              className="cursor-pointer bg-gradient-to-br from-blue-800 to-purple-600 text-white px-6 py-2 rounded-xl transition duration-200 hover:brightness-110">
            Pay Rs {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubsCard;

import React from "react";

const SubsCard = ({
  plan,
  quality,
  device,
  price,
  month,
  planKey,
  handleClick,
}) => {
  return (
    <div className="flex justify-center items-center ">
      <div className=" md:h-80 md:w-70 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300 relative w-[90%] max-w-md mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] border border-white/30 z-10 flex-col text-xs text-white">
        {/* Plan Header */}
        <div className="lg:mt-4 rounded-lg p-2 bg-gradient-to-br from-[#2b2c7c] to-[#0e6de9] text-white font-semibold text-xs">
          <p>{plan}</p>
        </div>

        {/* Plan Details */}
        <div className="space-y-3  md:mt-6 lg:mt-6 text-xs h-36 items-center justify-center flex flex-col md:font-semibold ">
          <p>Quality : {quality}</p>
          <p>Device Access : {device}</p>
          <p>
            Rs {price} per {month}
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center">
          <button
            onClick={() => handleClick(planKey, plan, device)}
            className="mt-4 cursor-pointer bg-gradient-to-br from-[#2b2c7c] to-[#0e6de9] text-white px-6 py-2 rounded-lg transition duration-200 hover:brightness-110 "
          >
            Pay Rs {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubsCard;

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
    <div className="flex justify-center items-center  ">
      <div className="h-70 w-50  rounded-2xl shadow-md p-5 md:w-60  lg:h-80 lg:w-70  hover:shadow-lg hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-br from-[#080137] to-[#442bc3] text-black hover:text-white flex  flex-col text-xs">
        {/* Plan Header */}
        <div className="lg:mt-4 rounded-lg p-2 bg-gradient-to-br from-[#2b2c7c] to-[#0e6de9] text-white font-semibold text-xs">
          <p>{plan}</p>
        </div>

        {/* Plan Details */}
        <div className="space-y-3 md:mt-6 lg:mt-8 text-xs h-40 items-center justify-center flex flex-col ">
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
            className="mt-4 cursor-pointer bg-gradient-to-br from-blue-800 to-purple-600 text-white px-6 py-2 rounded-lg transition duration-200 hover:brightness-110 "
          >
            Pay Rs {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubsCard;

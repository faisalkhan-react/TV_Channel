import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Kesari from "../../assets/Kesari.2019.jpg";

const HomeSlider = ({ title }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="font-semibold my-5">
      {/* Trending Section */}
      <div className="w-full">
        <div className="relative shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xl font-semibold">{title}</p>
            <button className="cursor-pointer w-20 text-xs h-6 rounded-xl bg-[#2162ca] text-white">
              View All
            </button>
          </div>

          {/* Scroll Arrows */}
          <button
            onClick={scrollLeft}
            className=" cursor-pointer absolute left-0 top-1/2 transform-translate-y-1/2 z-10 bg-opacity-70 bg-[#2162ca] text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden space-x-10 px-4 hide-scrollbar scroll-smooth"
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="min-w-[180px] group h-[270px] relative rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={Kesari}
                  alt={title}
                  className=" cursor-pointer w-full h-full object-cover 
                  transform transition-transform duration-300 group group-hover:scale-105 z-0
                  "
                />
                <div className="absolute inset-0 bg-black opacity-30 "></div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="cursor-pointer absolute right-0 top-1/2 transform-translate-y-1/2 z-10 bg-opacity-70 bg-[#2162ca] text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

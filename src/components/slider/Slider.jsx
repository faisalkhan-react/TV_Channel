import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Kesari from "../../assets/Kesari.2019.jpg";
import { Link } from "react-router-dom";

const HomeSlider = ({ title }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="font-semibold my-3 lg:my-5 flex justify-center items-center ">
      {/* Trending Section */}
      <div className="w-full">
        <div className="relative shadow-md">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm md:text-md lg:text-lg font-semibold">
              {title}
            </p>
            <button className="cursor-pointer w-20 text-xs h-6 rounded-xl bg-[#2162ca] text-white">
              View All
            </button>
          </div>

          {/* Scroll Arrows */}
          <button
            onClick={scrollLeft}
            className=" cursor-pointer absolute left-0 top-1/2 transform-translate-y-1/2 z-10 bg-opacity-70 bg-[#2162ca] text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft className="size-4 md:size-5 lg:size-6" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden  space-x-5 md:space-x-8 lg:space-x-10 px-4 hide-scrollbar scroll-smooth"
          >
            {[...Array(8)].map((_, index) => (
              <Link
                to={`/movie/${index}`}
                key={index}
                className="min-w-[100px] group 
                lg:h-[270px] lg:min-w-[180px]
                md:h-[200px] md:min-w-[150px]
                h-[150px] relative rounded-lg 
                shadow hover:shadow-lg overflow-hidden"
                // className="min-w-[180px] group h-[270px] relative rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={Kesari}
                  alt={title}
                  className=" cursor-pointer w-full h-full object-cover 
                  transform transition-transform duration-300 group group-hover:scale-105 z-0
                  "
                />
                <div className="absolute inset-0 bg-black opacity-30 "></div>
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="cursor-pointer absolute right-0 top-1/2 transform-translate-y-1/2 z-10 bg-opacity-70 bg-[#2162ca] text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight className="size-4 md:size-5 lg:size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;

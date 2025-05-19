import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Kesari from "../../assets/Kesari.2019.jpg";

const HomeSlider = ({ title }) => {
  console.log(title);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="font-semibold">
      {/* Trending Section */}
      <div className="w-full space-y-10">
        <div className="relative bg-[#dddddd1e] shadow-md p-4 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">{title}</p>
            <button className="cursor-pointer w-20 text-xs h-6 rounded-xl bg-blue-500 text-white">
              View All
            </button>
          </div>

          {/* Scroll Arrows */}
          <button
            onClick={scrollLeft}
            className=" cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto overflow-y-hidden space-x-10 px-10 hide-scrollbar scroll-smooth"
          >
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="min-w-[180px] h-[270px] rounded-lg shadow hover:shadow-lg overflow-hidden"
              >
                <img
                  src={Kesari}
                  alt="Trending Movie"
                  className=" cursor-pointer w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 hover:bg-blue-500 hover:text-white p-2 rounded-full shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Other Categories */}
        {/* {["Action", "Romance", "Drama"].map((category, idx) => (
          <div
            key={idx}
            className="h-60 border-2 border-blue-500 flex justify-between p-4 rounded-xl"
          >
            <p>{category}</p>
            <button className="w-20 h-6 rounded-xl bg-blue-500 text-white text-sm">
              View All
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default HomeSlider;

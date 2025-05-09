import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Slider = ({ title = "Category", images: propImages = [] }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (propImages && propImages.length > 0) {
      setImages(propImages);
    } else {
      const mockImages = [
        { id: 1, url: "/assets/Kesari.2019.jpg" },
        { id: 2, url: "/assets/Kesari.2019.jpg" },
        { id: 3, url: "/assets/Kesari.2019.jpg" },
        { id: 4, url: "/assets/Kesari.2019.jpg" },
        { id: 5, url: "/assets/Kesari.2019.jpg" },
      ];
      setImages(mockImages);
    }
  }, [propImages]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const handleViewAll = () => {
    navigate("/view-all");
  };

  return (
    <div className="w-full my-4 relative">
      {/* Header */}
      <div className="flex justify-between items-center px-5 mb-[-40px]">
        <h3 className="text-xl mb-4 font-semibold">{title}</h3>
        {title !== "Languages" && (
          <button
            className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700 transition"
            onClick={handleViewAll}
          >
            View All
          </button>
        )}
      </div>

      {/* Slider Container */}
      <div className="relative max-w-full mx-auto overflow-hidden px-5 mt-6">
        {/* Left Arrow */}
        {/* <button
          className="absolute top-1/2 -translate-y-1/2 left-6 bg-black/60 text-white rounded-full p-2 text-xl z-10"
          onClick={scrollLeft}
        >
          &lt;
        </button> */}

        {/* Image Row */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth py-3 justify-around "
        >
          {images.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt={`img-${img.id}`}
              className={`${
                title === "Languages"
                  ? "w-[120px] h-[75px]"
                  : "w-[300px] h-[200px]"
              } object-fit object-center rounded-lg shadow-md shrink-0`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        {/* <button
          className="absolute top-1/2 -translate-y-1/2 right-6 bg-black/60 text-white rounded-full p-2 text-xl z-10"
          onClick={scrollRight}
        >
          &gt;
        </button> */}
      </div>
    </div>
  );
};

export default Slider;

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
    sliderRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const handleViewAll = () => {
    navigate("/view-all");
  };

  const isLanguageSlider = title === "Languages";

  return (
    <div className="w-full my-4 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-[#1e1e1e]">{title}</h3>
        {!isLanguageSlider && (
          <button
            className="bg-[#1e88e5] text-white px-4 py-2 rounded hover:bg-[#1565c0] transition"
            onClick={handleViewAll}
          >
            View All
          </button>
        )}
      </div>

      {/* Slider Container */}
      <div className="bg-white rounded-xl p-4 shadow hover:shadow-md transition duration-300">
        <div
          ref={sliderRef}
          className="flex justify-evenly gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-4"
        >
          {images.map((img) => (
            <div
              key={img.id}
              className={`shrink-0 rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-transform duration-300 ${
                isLanguageSlider
                  ? "w-[120px] h-[90px]"
                  : "w-[360px] h-[220px]"
              }`}
            >
              <img
                src={img.url}
                alt={`img-${img.id}`}
                className="w-full h-full object-fill rounded-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;

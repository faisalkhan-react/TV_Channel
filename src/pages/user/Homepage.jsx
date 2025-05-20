import React from "react";
import bannerVideo from "../../assets/Mufasa.mp4";
import Slider from "../../components/slider/Slider";
import Languages from "../Languages";

const Homepage = () => {
  return (
    <div className="bg-[#f4f4f6] text-[#1e1e1e] font-['Inter'] min-h-screen">
      {/* Banner Section */}
      <section className="w-screen overflow-hidden mt-2">
        <div className="w-full">
          <video
            src={bannerVideo}
            className="w-full h-[400px] object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>
      <Languages />
      <Slider title="Trending" />
      <Slider title="Action" />
      <Slider title="Drama" />
      <Slider title="Romance" />
    </div>
  );
};

export default Homepage;

import React from "react";
import bannerVideo from "../../assets/Mufasa.mp4";
import banner from "../../assets/ott3.webp";
import Slider from "../../components/slider/Slider";
import Languages from "../Languages";
import HomeSlider from "../../components/slider/Slider";
import { Home } from "lucide-react";

const Homepage = () => {
  return (
    <div className="w-screen relative bg-black text-white">
      <div
        className="hero_section h-[80vh] relative bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container_center h-full mx-auto flex items-center text-white relative p-4">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="left_container w-[40%] z-10 relative">
            <div className="flex gap-2 my-5">
              <p>History</p>
              <p>Action</p>
            </div>
            <h1 className="text-5xl font-bold my-5">Better Call Saul</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              quasi beatae delectus eum, earum perspiciatis officia maiores
              architecto exercitationem ea! Doloremque ut et accusamus vero
              labore quasi
            </p>
            <div className="flex gap-2 my-5">
              <p>2hr:55mins</p>
              <p></p>
              <p>2hr:55mins</p>
            </div>
          </div>
        </div>
      </div>

      {/* trending */}

      <div className="p-4 bg-black">
        <HomeSlider title="Trending" />
        <HomeSlider title="New Realease" />
        <HomeSlider title="Featured" />
      </div>
    </div>
    // trending
  );
};

export default Homepage;

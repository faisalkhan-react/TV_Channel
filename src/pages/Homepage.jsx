import React from "react";
import bannerVideo from "../assets/Mufasa.mp4";
import Slider from "../component/slider/Slider";
import kesariImg from "../assets/Kesari.2019.jpg";
import Infinity_war from "../assets/Infinity_war.jpg";
import english from "../assets/english.jpg";
import hindi from "../assets/hindi.jpg";
import bhojpuri from "../assets/bhojpuri.jpg";
import kannada from "../assets/kannada.jpg";
import malayalam from "../assets/malayalam.jpg";
import tamil from "../assets/tamil.jpg";
import telugu from "../assets/telugu.jpg";

const Homepage = () => {
  const languageImages = [
    { id: 1, url: english },
    { id: 2, url: hindi },
    { id: 3, url: kannada },
    { id: 4, url: bhojpuri },
    { id: 5, url: malayalam },
    { id: 6, url: tamil },
    { id: 7, url: telugu },
  ];

  const trendingImages = [
    { id: 8, url: Infinity_war },
    { id: 9, url: kesariImg },
    { id: 10, url: kesariImg },
    { id: 11, url: kesariImg },
    { id: 12, url: kesariImg },
    { id: 13, url: kesariImg },
    { id: 14, url: kesariImg },
    { id: 15, url: kesariImg },
  ];

  const actionImages = [
    { id: 16, url: kesariImg },
    { id: 17, url: kesariImg },
  ];

  const comedyImages = [
    { id: 18, url: kesariImg },
    { id: 19, url: kesariImg },
  ];

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

      {/* Sliders */}
      <Slider title="Languages" images={languageImages} />
      <Slider title="Trending Now" images={trendingImages} />
      
      <Slider title="Action Movies" images={actionImages} />
      <Slider title="Romance" images={comedyImages} />
    </div>
  );
};

export default Homepage;

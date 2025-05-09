import React from "react";
import "./Homepage.css";
import bannerImage from "../assets/Kesari.jpg";
import Slider from "../component/slider/Slider";
import kesariImg from "../assets/Kesari.2019.jpg";
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
    { id: 5, url: telugu },
  ];

  const trendingImages = [
    { id: 1, url: kesariImg },
    { id: 2, url: kesariImg },
    { id: 3, url: kesariImg },
    { id: 4, url: kesariImg },
    { id: 5, url: kesariImg },
    { id: 6, url: kesariImg },
    { id: 7, url: kesariImg },
    { id: 8, url: kesariImg },
    { id: 9, url: kesariImg },
  ];

  const actionImages = [
    { id: 4, url: kesariImg },
    { id: 5, url: kesariImg },
  ];

  const comedyImages = [
    { id: 6, url: kesariImg },
    { id: 7, url: kesariImg },
  ];

  return (
    <div className="homepage bg-[#F9FAFB]">
      <section className="banner">
        <div className="banner-content">
          <img src={bannerImage} alt="Banner" className="banner-img" />
        </div>
      </section>

      <Slider title="Languages" images={languageImages} />
      <Slider title="Trending Now" images={trendingImages} />
      <Slider title="Action Movies" images={actionImages} />
      <Slider title="Romance" images={comedyImages} />
    </div>
  );
};

export default Homepage;

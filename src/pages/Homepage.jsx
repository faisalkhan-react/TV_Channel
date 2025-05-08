import React from "react";
import "./Homepage.css";
import bannerImage from "../assets/Kesari.jpg";
import Slider from "../component/slider/Slider";
import kesariImg from '../assets/Kesari.2019.jpg';

const Homepage = () => {
  const trendingImages = [
    { id: 1, url: kesariImg },
    { id: 2, url: kesariImg },
    { id: 3, url: kesariImg },
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
    <div className="homepage">
      <section className="banner">
        <div className="banner-content">
          <img src={bannerImage} alt="Banner" className="banner-img" />
        </div>
      </section>

      <Slider title="Trending Now" images={trendingImages} />
      <Slider title="Action Movies" images={actionImages} />
      <Slider title="Romance" images={comedyImages} />
    </div>
  );
};

export default Homepage;

import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';
import { useNavigate } from 'react-router-dom';
import kesariImg from '../../assets/Kesari.2019.jpg';

const Slider = ({ title = "Category", images: propImages = null }) => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (propImages) {
      setImages(propImages);
    } else {
      // Default mock data if no images prop is passed
      const mockImages = [
        { id: 1, url: kesariImg },
        { id: 2, url: kesariImg },
        { id: 3, url: kesariImg },
        { id: 4, url: kesariImg },
        { id: 5, url: kesariImg },
      ];
      setImages(mockImages);
    }
  }, [propImages]);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleViewAll = () => {
    navigate('/view-all'); // You can enhance this to pass category as param
  };

  return (
    <div className="slider-section">
      <div className="slider-header">
        <h3>{title}</h3>
        <button className="view-all-btn" onClick={handleViewAll}>View All</button>
      </div>

      <div className="slider-wrapper">
        <button className="slider-btn left" onClick={scrollLeft}>&lt;</button>

        <div className="slider" ref={sliderRef}>
          {images.map((img) => (
            <img key={img.id} src={img.url} alt={`img-${img.id}`} />
          ))}
        </div>

        <button className="slider-btn right" onClick={scrollRight}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;

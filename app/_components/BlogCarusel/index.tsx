'use client';

import React, { useEffect, useRef } from 'react';

const BlogCarousel = () => {
  const carouselRef = useRef(null);

  const imageUrls = [
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-witra.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Rosenthal.png.webp',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-PackIt.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2017/01/nichemodern.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Magisso.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Louis-Poulsen.png.webp',
    'https://woodmart.b-cdn.net/wp-content/uploads/2017/01/klobe2r.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Joseph-Joseph.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-hay.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-flos.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-Eva-Solo.png',
    'https://woodmart.b-cdn.net/wp-content/uploads/2016/09/brand-alessi.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const firstChild = carouselRef.current.firstElementChild;
        carouselRef.current.appendChild(firstChild);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    e.preventDefault();
    carouselRef.current.style.cursor = 'grabbing';
    carouselRef.current.isDragging = true;
    carouselRef.current.startX = e.pageX - carouselRef.current.offsetLeft;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft || 0;
  };

  const handleMouseMove = (e) => {
    if (!carouselRef.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - carouselRef.current.startX) * 2;
    carouselRef.current.scrollLeft = carouselRef.current.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    carouselRef.current.style.cursor = 'grab';
    carouselRef.current.isDragging = false;
  };

  return (
    <div className="bg-gray-100 mt-4 py-4 overflow-hidden">
      <div
        ref={carouselRef}
        className="flex justify-between items-center space-x-4 cursor-grab"
        style={{ width: 'max-content' }} 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {imageUrls.map((url, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-36 h-28 flex items-center justify-center border border-gray-100 bg-gray-100"
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCarousel;

'use client';  

import React, { useEffect, useRef } from 'react';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CustomSwiper = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    const handleSlideChange = () => {
      const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
      const content = activeSlide.querySelector('.slide-content');
      if (content) {
        content.style.animation = 'slideUp 1s ease-in-out';
      }
    };

    swiperInstance.on('slideChangeTransitionStart', handleSlideChange);

    return () => {
      swiperInstance.off('slideChangeTransitionStart', handleSlideChange);
    };
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '50px' }}> 
      <ReactSwiper
        ref={swiperRef}
        spaceBetween={30} 
        slidesPerView={1}
        style={{ width: '100%' }} 
      >
        <SwiperSlide style={{ 
          backgroundColor: '#f6f0f6',  
          height: '35rem',  
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          border: 'none',  
          overflow: 'hidden',
        }}>
          <div className="slide-content" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#f462ac', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' , fontWeight: 'bold' }}>GREAT ACCESSORIES</p> 
            <h2 style={{ fontSize: '3.3rem', color: '#333', marginBottom: '20px' }}>Forest Eyes Sunglasses</h2> 
            <img 
              src="https://woodmart.b-cdn.net/wp-content/uploads/2021/06/glasses-slider-img-3-430x169.png.webp" 
              alt="" 
              style={{ 
                width: 'auto', 
                height: '250px',  
                marginBottom: '20px',
              }} 
            />
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
              <button style={{ 
                backgroundColor: '#f462ac', 
                color: '#fff', 
                border: 'none', 
                padding: '12px 24px', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                borderRadius: '4px',
              }}>Open Shop</button>
              <span style={{ 
                color: '#000', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
              }}>
                View More
                <div style={{
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#f462ac',
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                }}></div>
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ 
          backgroundColor: '#f5f2e9',  
          height: '35rem',  
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          border: 'none',
          overflow: 'hidden',
        }}>
          <div className="slide-content" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#b09a77', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px' ,fontWeight: 'bold' }}>POLARIZED LENSES</p> 
            <h2 style={{ fontSize: '3.3rem', color: '#333', marginBottom: '20px' }}>Sandstorm Sunglasses</h2> 
            <img 
              src="https://woodmart.b-cdn.net/wp-content/uploads/2021/06/glasses-slider-img.png.webp" 
              alt="" 
              style={{ 
                width: 'auto', 
                height: '250px',  
                marginBottom: '20px',
              }} 
            />
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
              <button style={{ 
                backgroundColor: '#b09a77', 
                color: '#fff', 
                border: 'none', 
                padding: '12px 24px', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                borderRadius: '4px',
              }}>Open Shop</button>
              <span style={{ 
                color: '#000', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
              }}>
                View More
                <div style={{
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#b09a77',
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                }}></div>
              </span>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide style={{ 
          backgroundColor: '#e0f2ff', 
          height: '35rem',  
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          position: 'relative',
          border: 'none',
          overflow: 'hidden',
        }}>
          <div className="slide-content" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: '#7baedb', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>AVIATOR LENSES</p> 
            <h2 style={{ fontSize: '3.3rem', color: '#333', marginBottom: '20px' }}>Iceberg Sunglasses</h2> 
            <img 
              src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/glasses-slider-img-2.png.webp" 
              alt="" 
              style={{ 
                width: 'auto', 
                height: '250px',  
                marginBottom: '20px',
              }} 
            />
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '30px', alignItems: 'center' }}>
              <button style={{ 
                backgroundColor: '#7baedb', 
                color: '#fff', 
                border: 'none', 
                padding: '12px 24px', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                borderRadius: '4px',
              }}>Open Shop</button>
              <span style={{ 
                color: '#000', 
                fontSize: '14px', 
                cursor: 'pointer', 
                textTransform: 'uppercase',
                fontWeight: 'bold',
                position: 'relative',
                display: 'inline-block',
              }}>
                View More
                <div style={{
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#7baedb',
                  position: 'absolute',
                  bottom: '-3px',
                  left: '0',
                }}></div>
              </span>
            </div>
          </div>
        </SwiperSlide>
      </ReactSwiper>
    </div>
  );
};

export default CustomSwiper;

const styles = `
@keyframes slideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

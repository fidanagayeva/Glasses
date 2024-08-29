'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const GordonGlasses = () => {
  return (
    <div className="relative h-[75vh] w-full md:w-[87vw] bg-cover bg-center mb-[10rem] mx-auto" style={{ backgroundImage: "url('https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-img-4.jpg?id=20441')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-20"></div> 

      <div className="relative z-10 flex flex-col justify-center items-start p-4 md:p-8 space-y-4 text-black ml-4 md:ml-8 mt-12">
        <h1 className="text-3xl md:text-4xl font-medium mt-[5rem]">Gordon-Glasses</h1>
        <h2 className="text-2xl md:text-3xl font-normal">
          True <span className="font-bold underline underline-offset-8 decoration-blue-300">Modern Classics.</span>
        </h2>
        <p className="max-w-full md:max-w-lg text-sm text-gray-600">
          One morning, when Gregor Samsa woke from troubled <br /> dreams, he found himself transformed in his bed into a <br /> horrible vermin. He lay on his armour-like.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 mr-4">Buy Now</button>
          <button className="hover:bg-blue-300 border border-gray-200 text-black py-2 px-4">Read More</button>
        </div>
      </div>

      <div className="absolute top-[25rem] left-0 right-0 z-20 mb-20">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-gallary-img-1-400x156.png.webp" alt="" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-gallary-img-2-400x156.png.webp" alt="" className="mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-gallary-img-3-400x156.png.webp" alt="" className="mx-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default GordonGlasses;

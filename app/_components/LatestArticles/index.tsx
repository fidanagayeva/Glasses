'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaComment, FaShareAlt } from 'react-icons/fa';

const LatestArticles = () => {
    return (
        <div className="px-4 md:px-16">
            <h2 className="text-3xl text-center my-8">Latest Articles</h2>
            <p className="text-center text-gray-500 mb-6">There are many variations of passages of lorem.</p>
            
            <Swiper
                spaceBetween={20}
                slidesPerView={1} 
                breakpoints={{
                    768: {
                        slidesPerView: 2, 
                    },
                }}
                grabCursor={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative bg-white mb-[3rem] overflow-hidden">
                        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-blog-img-1.jpg.webp" alt="Reinterprets the classic bookshelf" className="w-[17rem] h-[23rem] object-cover mx-auto md:mx-0" />
                        <div className="absolute top-4 left-4 text-center bg-white px-3 py-2 h-[3rem] shadow">
                            <p className="text-sm font-semibold">23 JUL</p>
                        </div>
                        <div className="absolute top-[10%] right-[15%] w-[35%] p-1 bg-blue-200 text-white text-center z-20 whitespace-nowrap overflow-hidden text-ellipsis">
                            DESIGN TRENDS, INSPIRATION
                        </div>
                        <div className="absolute bottom-[5rem] right-[10%] w-[50%] p-4 bg-white shadow-md flex flex-col items-center z-10">
                            <h3 className="text-lg font-semibold mb-2 text-center">Reinterprets the classic bookshelf</h3>
                            <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
                                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="" className="w-6 h-6 rounded-full mr-2" />
                                <span>S. Rogers</span>
                                <div className="ml-2 flex space-x-2 text-gray-400">
                                    <FaComment />
                                    <FaShareAlt />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-2 text-center">Aliquet parturient scele risque scele risque nibh pretium parturient suspendisse platea sapien torquent feugiat parturie...</p>
                            <p className="text-blue-200 text-sm font-semibold cursor-pointer hover:underline">CONTINUE READING</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bg-white mb-[3rem] overflow-hidden">
                        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-blog-img-2.jpg.webp" alt="Minimalist design furniture 2024" className="w-[17rem] h-[23rem] object-cover mx-auto md:mx-0" />
                        <div className="absolute top-4 left-4 text-center bg-white px-3 py-2 h-[3rem] shadow">
                            <p className="text-sm font-semibold">23 JUL</p>
                        </div>
                        <div className="absolute top-[10%] right-[15%] w-[35%] p-1 bg-blue-200 text-white text-center z-20 whitespace-nowrap overflow-hidden text-ellipsis">
                            DESIGN TRENDS, FURNITURE
                        </div>
                        <div className="absolute bottom-[5rem] right-[10%] w-[50%] p-4 bg-white shadow-md flex flex-col items-center z-10">
                            <h3 className="text-lg font-semibold mb-2 text-center">Minimalist design furniture 2024</h3>
                            <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
                                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="" className="w-6 h-6 rounded-full mr-2" />
                                <span>S. Rogers</span>
                                <div className="ml-2 flex space-x-2 text-gray-400">
                                    <FaComment />
                                    <FaShareAlt />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-2 text-center">A taciti cras scelerisque scelerisque gravida natoque nulla vestibulum turpis primis adipiscing faucibus scelerisque adi...</p>
                            <p className="text-blue-200 text-sm font-semibold cursor-pointer hover:underline">CONTINUE READING</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative bg-white mb-[3rem] overflow-hidden">
                        <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-blog-img-3.jpg.webp" alt="Top 10 outdoor furniture trends" className="w-[17rem] h-[23rem] object-cover mx-auto md:mx-0" />
                        <div className="absolute top-4 left-4 text-center bg-white px-3 py-2 h-[3rem] shadow">
                            <p className="text-sm font-semibold">05 SEP</p>
                        </div>
                        <div className="absolute top-[10%] right-[15%] w-[35%] p-1 bg-blue-200 text-white text-center z-20 whitespace-nowrap overflow-hidden text-ellipsis">
                            DESIGN TRENDS, HANDMADE
                        </div>
                        <div className="absolute bottom-[5rem] right-[10%] w-[50%] p-4 bg-white shadow-md flex flex-col items-center z-10">
                            <h3 className="text-lg font-semibold mb-2 text-center">Top 10 outdoor furniture trends</h3>
                            <div className="flex justify-center items-center text-sm text-gray-500 mb-2">
                                <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/10/avatar-home.jpg.webp" alt="" className="w-6 h-6 rounded-full mr-2" />
                                <span>L. Brown</span>
                                <div className="ml-2 flex space-x-2 text-gray-400">
                                    <FaComment />
                                    <FaShareAlt />
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mb-2 text-center">Curabitur bibendum diam vel turpis cursus, ut lacinia nisi suscipit. Maecenas vitae augue sit amet magna consectetur aliquet...</p>
                            <p className="text-blue-200 text-sm font-semibold cursor-pointer hover:underline">CONTINUE READING</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default LatestArticles;

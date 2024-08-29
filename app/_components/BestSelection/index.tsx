import React from 'react';

const BestSelection = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-12 relative mx-auto my-8 md:my-16 max-w-7xl px-4 md:px-8 lg:px-16">
                <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-0 md:ml-[-3rem] -mt-[4rem] md:-mt-[8.5rem] z-10">
                    <h2 className="text-3xl md:text-4xl font-light">Best selection of</h2>
                    <h1 className="text-4xl md:text-5xl mt-2">
                        <span className="font-bold relative inline-block">
                            High-Quality
                            <span className="block w-full h-[3px] bg-blue-300 absolute left-0 bottom-[-2px]"></span>
                        </span>{' '}
                        lenses.
                    </h1>
                    <p className="text-gray-400 mt-8 text-sm md:text-base">
                        To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language.
                    </p>
                    <div className="flex justify-start items-center mt-[3rem] mb-[3.5rem] gap-x-4">
                        <div className="flex items-center text-left">
                            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-optical-glasses-3-1.jpg.webp" alt="" className="mb-0" />
                        </div>
                        <div className="flex items-center text-left">
                            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-optical-glasses-1-1.jpg.webp" alt="" className="mb-0" />
                        </div>
                        <div className="flex items-center text-left">
                            <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-optical-glasses-2-1.jpg.webp" alt="" className="mb-0" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 mr-4">
                            CONTACT US
                        </button>
                        <button className="bg-white hover:bg-gray-200 border border-gray-200 text-black py-2 px-4">
                            CLICK ME
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row relative">
                    <img
                        src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-img-5.jpg.webp"
                        alt=""
                        className="w-full md:w-[48%] object-cover relative -top-4 md:-top-8"
                    />
                    <img
                        src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-img-6.jpg.webp"
                        alt=""
                        className="w-full md:w-[48%] object-cover mt-4 md:mt-0 md:ml-4"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center p-6 md:p-12 mx-auto mt-8 md:mt-16 max-w-7xl px-4 md:px-8 lg:px-16 gap-y-8 md:gap-y-0">
                <div className="text-center">
                    <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-num-1.png.webp" alt="" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="text-lg font-semibold">Made in UK</h3>
                    <p className="text-sm text-gray-500 mt-2">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar.</p>
                    <div className="mt-4 flex justify-center">
                        <span className="relative text-black font-semibold inline-block">
                            View More
                            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-300"></span>
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-num-2.png.webp" alt="" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="text-lg font-semibold">Striking Design</h3>
                    <p className="text-sm text-gray-500 mt-2">Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
                    <div className="mt-4 flex justify-center">
                        <span className="relative text-black font-semibold inline-block">
                            View More
                            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-300"></span>
                        </span>
                    </div>
                </div>
                <div className="text-center">
                    <img src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-num-3.png.webp" alt="" className="mx-auto mb-4 w-12 h-12" />
                    <h3 className="text-lg font-semibold">Natural Materials</h3>
                    <p className="text-sm text-gray-500 mt-2">No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally.</p>
                    <div className="mt-4 flex justify-center">
                        <span className="relative text-black font-semibold inline-block">
                            View More
                            <span className="absolute left-0 right-0 bottom-[-4px] h-[2px] bg-blue-300"></span>
                        </span>
                    </div>
                </div>
            </div>


            <hr className="w-full border-t border-gray-300 mt-16 mb-4" />
        </div>
    );
};

export default BestSelection;

import React from 'react';

const BestGlasses = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-12 relative mx-auto my-8 md:my-16 max-w-7xl">
      <div className="flex flex-col md:flex-row relative">
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-img-1.jpg.webp"
          alt=""
          className="w-full md:w-[48%] object-cover relative -top-4 md:-top-8"
        />
        <img
          src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-img-2.jpg.webp"
          alt=""
          className="w-full md:w-[48%] object-cover mt-4 md:mt-0 md:ml-4"
        />
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0 ml-0 md:ml-[-3rem] -mt-[4rem] md:-mt-[8.5rem] z-10">
        <h2 className="text-3xl md:text-4xl font-light">Best glasses</h2>
        <h1 className="text-4xl md:text-5xl mt-2">
          <span className="font-bold relative inline-block">
            Collection
            <span className="block w-full h-[2px] bg-blue-300 absolute left-0 bottom-[-2px]"></span>
          </span>{' '}
          of 2024.
        </h1>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure A wonderful serenity has taken possession of my entire soul,
          like these sweet mornings of spring The European languages.
        </p>
        <ul className="flex flex-col md:flex-row mt-6 space-y-2 md:space-y-0 md:space-x-8">
          <li className="text-gray-400 flex items-center">
            <span className="bg-blue-300 w-2 h-2 rounded-full inline-block mr-2"></span>
            New color combinations
          </li>
          <li className="text-gray-400 flex items-center">
            <span className="bg-blue-300 w-2 h-2 rounded-full inline-block mr-2"></span>
            High-quality materials
          </li>
        </ul>
        <ul className="flex flex-col md:flex-row mt-2 space-y-2 md:space-y-0 md:space-x-8">
          <li className="text-gray-400 flex items-center">
            <span className="bg-blue-300 w-2 h-2 rounded-full inline-block mr-2"></span>
            Wide selection of lenses
          </li>
          <li className="text-gray-400 flex items-center">
            <span className="bg-blue-300 w-2 h-2 rounded-full inline-block mr-2"></span>
            Convenient carrying case
          </li>
        </ul>
        <div className="mt-6">
          <button className="bg-blue-300 hover:bg-blue-500 text-white py-2 px-4 mr-4">
            ADD TO CART
          </button>
          <button className="bg-white hover:bg-gray-200 border border-gray-200 text-black py-2 px-4">
            VIEW MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestGlasses;

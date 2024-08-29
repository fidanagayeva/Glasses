import React from 'react';

const EntryCards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-2 mx-4 md:mx-8 my-8">
      <div className="relative w-full md:w-[40rem] p-4">
        <div className="overflow-hidden">
          <img
            src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/glasses-category-img-1.jpg.webp"
            alt=""
            className="w-full object-cover h-[20rem] md:h-[25rem] transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="absolute top-1/4 left-4 md:left-8 text-left space-y-4">
          <p className="text-sm text-gray-500">WOMAN SUNGLASSES</p>
          <h2 className="text-3xl md:text-4xl font-bold">Garamond</h2>
          <a
            href="#"
            className="mt-2 inline-block text-sm font-semibold text-black"
          >
            VIEW MORE
          </a>
          <div className="mt-1 h-0.5 w-16 md:w-20 bg-blue-600"></div>
        </div>
      </div>
      <div className="relative w-full md:w-[40rem] p-4">
        <div className="overflow-hidden">
          <img
            src="https://woodmart.b-cdn.net/wp-content/uploads/2018/06/glasses-category-img-2.jpg.webp"
            alt=""
            className="w-full object-cover h-[20rem] md:h-[25rem] transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="absolute top-1/4 left-4 md:left-8 text-left space-y-4">
          <p className="text-sm text-gray-500">MAN SUNGLASSES</p>
          <h2 className="text-3xl md:text-4xl font-bold">Wayfarer</h2>
          <a
            href="#"
            className="mt-2 inline-block text-sm font-semibold text-black"
          >
            VIEW MORE
          </a>
          <div className="mt-1 h-0.5 w-16 md:w-20 bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
};

export default EntryCards;

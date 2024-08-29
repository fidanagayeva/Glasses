import React, { useState } from 'react';
import { FiShoppingCart, FiSearch, FiHeart, FiRefreshCcw } from 'react-icons/fi';

const BestsellerProducts = () => {
  const [activeCategory, setActiveCategory] = useState('newArrivals');

  const products = {
    newArrivals: [
      {
        id: 1,
        title: 'Adipiscing sagittis proin',
        category: 'Glasses',
        price: '$229.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-2-pr-2-430x179.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-2-pr-3-400x166.jpg.webp',
        colors: ['#000', '#ccc'],
      },
      {
        id: 2,
        title: 'Non morbi torquent',
        category: 'Glasses',
        price: '$269.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-5-pr-2-1-400x166.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-5-pr-3-1-400x166.jpg.webp',
        colors: ['#f5f5f5', '#f6e7e0'],
      },
      {
        id: 3,
        title: 'Orci nam aliquam',
        category: 'Glasses',
        price: '$249.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-4-pr-2-400x166.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-4-pr-3-400x166.jpg.webp',
        colors: ['#000', '#eee'],
      },
      {
        id: 4,
        title: 'Porta cras suspendisse',
        category: 'Glasses',
        price: '$239.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-1-pr-2-400x166.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-1-pr-3-400x166.jpg.webp',
        colors: ['#000', '#f6e7e0'],
      },
      {
        id: 5,
        title: 'Pretium egestas interdum',
        category: 'Glasses',
        price: '$259.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-3-pr-2-400x166.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-3-pr-3-400x166.jpg.webp',
        colors: ['#000', '#eee'],
      },
      {
        id: 6,
        title: 'Nam tincidunt cursus',
        category: 'Glasses',
        price: '$199.00',
        image1: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-6-pr-2-700x291.jpg.webp',
        image2: 'https://woodmart.b-cdn.net/wp-content/uploads/2018/06/gl-6-pr-3-400x166.jpg.webp',
        colors: ['#000', '#f6e7e0'],
      },
    ],
    eyeglasses: [
      {
        id: 7,
        title: 'Fusce vulputate quam',
        category: 'Glasses',
        price: '$199.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-3-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-3-pr-3-400x166.jpg',
        colors: ['#000', '#ddd'],
      },
      {
        id: 8,
        title: 'Lacus gravida dictum',
        category: 'Glasses',
        price: '$259.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-6-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-6-pr-3-400x166.jpg',
        colors: ['#000', '#eee'],
      },
      {
        id: 9,
        title: 'Pellentesque volutpat',
        category: 'Glasses',
        price: '$249.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-2-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-2-pr-3-400x166.jpg',
        colors: ['#000', '#ebdecd'],
      },
      {
        id: 10,
        title: 'Vestibulum fringilla',
        category: 'Glasses',
        price: '$279.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-1-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-1-pr-3-400x166.jpg',
        colors: ['#000', '#ddd'],
      },
      {
        id: 11,
        title: 'Curabitur cursus nulla',
        category: 'Glasses',
        price: '$229.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-5-pr-2-1-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-5-pr-3-1-400x166.jpg',
        colors: ['#000', '#ebdecd'],
      },
      {
        id: 12,
        title: 'Mauris suscipit libero',
        category: 'Glasses',
        price: '$249.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-4-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-4-pr-3-400x166.jpg',
        colors: ['#000', '#eee'],
      },
    ],
    sunglasses: [
      {
        id: 13,
        title: 'Orci nec vehicula',
        category: 'Glasses',
        price: '$299.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-2-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-2-pr-3-400x166.jpg',
        colors: ['#000', '#ebdecd'],
      },
      {
        id: 14,
        title: 'Proin at arcu',
        category: 'Glasses',
        price: '$239.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-1-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-1-pr-3-400x166.jpg',
        colors: ['#000', '#eee'],
      },
      {
        id: 15,
        title: 'Nam vulputate mauris',
        category: 'Glasses',
        price: '$209.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-3-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-3-pr-3-400x166.jpg',
        colors: ['#000', '#ddd'],
      },
      {
        id: 16,
        title: 'Integer lobortis elit',
        category: 'Glasses',
        price: '$229.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-5-pr-2-1-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-5-pr-3-1-400x166.jpg',
        colors: ['#000', '#ebdecd'],
      },
      {
        id: 17,
        title: 'Maecenas pulvinar',
        category: 'Glasses',
        price: '$249.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-4-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-4-pr-3-400x166.jpg',
        colors: ['#000', '#eee'],
      },
      {
        id: 18,
        title: 'Etiam bibendum justo',
        category: 'Glasses',
        price: '$199.00',
        image1: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-6-pr-2-400x166.jpg',
        image2: 'https://woodmart.xtemos.com/wp-content/uploads/2018/06/gl-6-pr-3-400x166.jpg',
        colors: ['#000', '#ddd'],
      },
    ],
  };

  const renderProducts = () => {
    return products[activeCategory].map(product => (
      <div key={product.id} className="text-center group mb-[0.3rem]">
        <div className="relative">
          <img
            src={product.image1}
            alt={product.title}
            className="w-full h-auto transition-opacity duration-500"
          />
          <img
            src={product.image2}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-auto transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-40 bg-white flex justify-between items-center px-4 py-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow">
            <button className="p-2 hover:text-gray-300 transition">
              <FiShoppingCart size={18} />
            </button>
            <button className="p-2 hover:text-gray-300 transition">
              <FiSearch size={18} />
            </button>
            <button className="p-2 hover:text-gray-300 transition">
              <FiRefreshCcw size={18} />
            </button>
            <button className="p-2 hover:text-gray-300 transition">
              <FiHeart size={18} />
            </button>
          </div>
        </div>
        <div className="m-4">
          <div className="flex justify-center mb-2">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-4 h-4 rounded-full mx-1"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <p className="text-sm">{product.title}</p>
          <p className="text-gray-500 text-xs">{product.category}</p>
          <p className="text-blue-300">{product.price}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <h2 className="text-3xl text-center my-8">Bestseller Products</h2>
      <p className="text-center text-gray-500 mb-6">There are many variations of passages of lorem.</p>
      <div className="flex justify-center space-x-8 mb-8">
        <button
          className={`text-lg  text-gray-600 ${
            activeCategory === 'newArrivals' ? 'border-b-2 border-blue-300' : ''
          }`}
          onClick={() => setActiveCategory('newArrivals')}
        >
          NEW ARRIVALS
        </button>
        <button
          className={`text-lg text-gray-600 ${
            activeCategory === 'eyeglasses' ? 'border-b-2 border-blue-300' : ''
          }`}
          onClick={() => setActiveCategory('eyeglasses')}
        >
          EYEGLASSES
        </button>
        <button
          className={`text-lg text-gray-600 ${
            activeCategory === 'sunglasses' ? 'border-b-2 border-blue-300' : ''
          }`}
          onClick={() => setActiveCategory('sunglasses')}
        >
          SUNGLASSES
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {renderProducts()}
      </div>
    </div>
  );
};

export default BestsellerProducts;

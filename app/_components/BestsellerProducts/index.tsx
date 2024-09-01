import React, { useState, useEffect } from 'react';
import { FiShoppingCart, FiSearch, FiHeart, FiRefreshCcw } from 'react-icons/fi';
import CartSidebar from '../../_featured/sidebar/CartSidebar'; 

const BestsellerProducts = () => {
  const [activeCategory, setActiveCategory] = useState('newArrivals');
  const [products, setProducts] = useState({ newArrivals: [], eyeglasses: [], sunglasses: [] });
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setSidebarOpen(true); 
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const renderProducts = () => {
    return products[activeCategory].map((product) => (
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
            <button className="p-2 hover:text-gray-300 transition" onClick={() => addToCart(product)}>
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
          className={`text-lg text-gray-600 ${
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
      <CartSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
    </div>
  );
};

export default BestsellerProducts;
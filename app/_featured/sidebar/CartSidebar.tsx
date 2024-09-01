'use client';

import React from 'react';
import { FiX } from 'react-icons/fi';

const CartSidebar = ({ isSidebarOpen, toggleSidebar, cartItems = [], removeFromCart }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-700 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Shopping cart</h2>
          <button onClick={toggleSidebar} className="text-gray-500 text-xl">&times;</button>
        </div>
        <div className="p-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4 border-b pb-4 relative">
                <img src={item.image1} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <p className="text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                  <p className="text-blue-300 text-sm">{item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute right-0 top-0 text-gray-500 hover:text-red-500"
                >
                  <FiX size={18} />
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No products in the cart.</p>
          )}
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">RETURN TO SHOP</button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default CartSidebar;

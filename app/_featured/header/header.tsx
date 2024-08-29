"use client";

import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiUser, FiShoppingCart, FiChevronDown, FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import { signOut } from '@firebase/auth';
import { auth } from '../../_firebase/config';
import toast from 'react-hot-toast';

const Header = () => {
  const [user, setUser] = useState(null);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [isUserDropdownVisible, setUserDropdownVisible] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMenuSidebarOpen, setMenuSidebarOpen] = useState(false);
  const searchInputRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user') || '{}');
    if (data && data.email) {
      setUser(data);
    }
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setCookie('auth', '', { maxAge: 0 });
        localStorage.removeItem('user');
        router.push('/login');
        toast.success('LogOut success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearchClick = () => {
    setShowSearchOverlay(true);
    setTimeout(() => {
      searchInputRef.current.focus();
    }, 300);
  };

  const handleCloseSearch = () => {
    setShowSearchOverlay(false);
  };

  const toggleUserDropdown = (state) => {
    setUserDropdownVisible(state);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleMenuSidebar = () => {
    setMenuSidebarOpen(!isMenuSidebarOpen);
  };

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <>
      <div className="flex justify-between items-center py-6 px-8 bg-white border-b">
        <div className="flex items-center md:hidden">
          <FiMenu className="text-2xl cursor-pointer" onClick={toggleMenuSidebar} />
        </div>

        <div className="flex items-center mx-auto md:mx-0">
          <img src="https://woodmart.b-cdn.net/wp-content/themes/woodmart/images/wood-logo-dark.svg" alt="" className="h-8 mr-4" />
        </div>

        <div className="flex items-center space-x-4 relative md:hidden">
          <FiShoppingCart className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a onClick={() => navigateTo('/HomePage')} className="hover:text-gray-700 flex items-center cursor-pointer">
            HOME <FiChevronDown className="ml-1 text-gray-500" />
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center">
            SHOP <FiChevronDown className="ml-1 text-gray-500" />
          </a>
          <div className="relative">
            <a
              onClick={() => navigateTo('/BlogPage')}
              className="hover:text-gray-700 flex items-center"
              onMouseEnter={() => document.getElementById('dropdown').classList.remove('hidden')}
              onMouseLeave={() => document.getElementById('dropdown').classList.add('hidden')}
            >
              BLOG <FiChevronDown className="ml-1 text-gray-500" />
            </a>
            <div
              id="dropdown"
              className="hidden absolute left-0 mt-2 w-[650px] bg-white shadow-lg flex z-50"
              onMouseEnter={() => document.getElementById('dropdown').classList.remove('hidden')}
              onMouseLeave={() => document.getElementById('dropdown').classList.add('hidden')}
            >
              <div className="p-4 w-[30%]">
                <div className="text-gray-800 font-bold mb-4">BLOG TYPES</div>
                <ul className="space-y-2">
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Alternative</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Small images</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Blog chess</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Masonry grid</a></li>
                  <li className="relative"><a href="#" className="block text-gray-500 hover:text-blue-300">Meta on image</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Infinite scrolling</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Blog flat</a></li>
                  <li className="relative"><a href="#" className="block text-gray-500 hover:text-blue-300">Default flat</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Blog mask</a></li>
                </ul>
              </div>
              <div className="p-4 w-[30%]">
                <div className="text-gray-800 font-bold flex justify-between items-center mb-4">SINGLE POSTS</div>
                <ul className="space-y-2">
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #1</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #2</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #3</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #4</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #5</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #6</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #7</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #8</a></li>
                  <li><a href="#" className="block text-gray-500 hover:text-blue-300">Post example #9</a></li>
                </ul>
              </div>

              <div className="p-4 w-[40%] bg-gray-100">
                <div className="text-gray-800 font-bold mb-4">RECENT POSTS</div>
                <ul>
                  <li className="mb-4 border-b border-gray-300 pb-4">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-12-75x65.jpg" alt="" className="w-16 h-16 mr-3 object-cover" />
                      <div>
                        <p className="text-gray-700 text-sm mb-1">A companion for extra sleeping</p>
                        <p className="text-gray-500 text-xs">July 23, 2016 · 1 Comment</p>
                      </div>
                    </a>
                  </li>
                  <li className="mb-4 border-b border-gray-300 pb-4">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-11-75x65.jpg" alt="" className="w-16 h-16 mr-3 object-cover" />
                      <div>
                        <p className="text-gray-700 text-sm mb-1">Outdoor seating collection inspiration</p>
                        <p className="text-gray-500 text-xs">July 23, 2016 · 1 Comment</p>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a href="#" className="flex items-center hover:text-blue-600">
                      <img src="https://woodmart.xtemos.com/wp-content/uploads/2016/07/blog-17-75x65.jpg" alt="" className="w-16 h-16 mr-3 object-cover" />
                      <div>
                        <p className="text-gray-700 text-sm mb-1">Modular seating and table system</p>
                        <p className="text-gray-500 text-xs">July 23, 2016 · No Comment</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="#" className="hover:text-gray-700 flex items-center">
            PAGES <FiChevronDown className="ml-1 text-gray-500" />
          </a>
          <a href="#" className="hover:text-gray-700 flex items-center">
            ELEMENTS <FiChevronDown className="ml-1 text-gray-500" />
          </a>
          <a href="#" className="hover:text-gray-700">BUY</a>
        </div>

        <div className="hidden md:flex items-center space-x-4 relative">
          <FiSearch className="text-lg cursor-pointer" onClick={handleSearchClick} />
          <div className="relative">
            <FiUser
              className="text-lg cursor-pointer"
              onMouseEnter={() => document.getElementById('userDropdown').classList.remove('hidden')}
              onMouseLeave={() => document.getElementById('userDropdown').classList.add('hidden')}
            />
            {user && (
              <div
                id="userDropdown"
                className="hidden absolute right-[-5rem] mt-2 w-48 bg-white border rounded shadow-lg p-4 z-50 opacity-100 transition-opacity duration-300" // Added z-index here
                onMouseEnter={() => document.getElementById('userDropdown').classList.remove('hidden')}
                onMouseLeave={() => document.getElementById('userDropdown').classList.add('hidden')}
              >
                <p className="text-sm text-gray-700">Welcome {user.email}</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 bg-black text-white rounded-md px-4 py-2 text-sm w-full"
                >
                  LogOut
                </button>
              </div>
            )}
          </div>

          <FiShoppingCart className="text-lg cursor-pointer" onClick={toggleSidebar} />
          <span className="text-sm">$0.00</span>
        </div>
      </div>

      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-700 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Shopping cart</h2>
          <button onClick={toggleSidebar} className="text-gray-500 text-xl">&times;</button>
        </div>
        <div className="p-4">
          <p className="text-center text-gray-600">No products in the cart.</p>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">RETURN TO SHOP</button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-700 ${isMenuSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-4 flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleMenuSidebar} className="text-gray-500 text-xl">&times;</button>
        </div>
        <div className="p-4">
          <ul>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">HOME</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">DEMOS</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">SHOP</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">BLOG</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">PORTFOLIO</a>
            </li>
            <li className="py-2 border-b">
              <a href="#" className="block text-gray-800 hover:text-blue-500">PAGES</a>
            </li>
            <li className="py-2">
              <a href="#" className="block text-gray-800 hover:text-blue-500">WISHLIST</a>
            </li>
          </ul>
        </div>
      </div>

      {(isSidebarOpen || isMenuSidebarOpen) && (
        <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={isSidebarOpen ? toggleSidebar : toggleMenuSidebar}></div>
      )}

      {showSearchOverlay && (
        <div className="fixed top-[7rem] left-0 right-0 bg-white flex flex-col items-center justify-start z-40 h-[calc(100%-70px)] animate-slide-up">
          <div className="flex items-center justify-between w-full max-w-4xl px-4">
            <h1 className="text-4xl font-semibold flex-grow">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search for products"
                className="w-full bg-transparent border-none outline-none text-center"
                onFocus={(e) => (e.target.placeholder = '')}
                onBlur={(e) => (e.target.placeholder = 'Search for products')}
              />
            </h1>
            <button
              className="text-3xl ml-4"
              onClick={handleCloseSearch}
            >
              &times;
            </button>
          </div>
          <div className="w-full max-w-4xl mt-4 border-b border-gray-300"></div>
          <p className="text-lg text-gray-500 mt-4">Start typing to see products you are looking for.</p>
        </div>
      )}
    </>
  );
};

export default Header;

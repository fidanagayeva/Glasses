import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 w-full  bottom-0">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="mb-6">
          <img src="https://woodmart.xtemos.com/wp-content/uploads/2018/08/wood-logo-dark.svg" alt="" className="mb-4 h-8" />
          <p className="text-sm font-light text-gray-600 mb-4">
            Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.
          </p>
          <ul className="text-sm font-light text-gray-600 space-y-2">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> 451 Wall Street, UK, London</li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2" /> Phone: (064) 332-1233</li>
            <li className="flex items-center"><FaEnvelope className="mr-2" /> Fax: (099) 453-1357</li>
          </ul>
        </div>
        <div className="mb-6">
          <h4 className="font-light text-lg mb-4">Recent Posts</h4>
          <ul className="text-sm font-light text-black">
            <li className="mb-4 flex">
              <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-12-75x65.jpg" alt="" className="w-16 h-16 mr-4"/>
              <div>
                <p className="font-light text-sm">A companion for extra <br />sleeping</p>
                <p className="text-gray-500 text-xs">July 23, 2016 1 Comment</p>
              </div>
            </li>
            <hr className='mb-4'/>
            <li className="flex">
              <img src="https://woodmart.b-cdn.net/wp-content/uploads/2016/07/blog-11-75x65.jpg" alt="" className="w-16 h-16 mr-4"/>
              <div>
                <p className="font-light text-sm">Outdoor seating collection inspiration</p>
                <p className="text-gray-500 text-xs">July 23, 2016 1 Comment</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-light text-lg mb-4">Our Stores</h4>
            <ul className="text-sm font-light text-gray-600 space-y-2">
              <li>New York</li>
              <li>London SF</li>
              <li>Edinburgh</li>
              <li>Los Angeles</li>
              <li>Chicago</li>
              <li>Las Vegas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-light text-lg mb-4">Useful Links</h4>
            <ul className="text-sm font-light text-gray-600 space-y-2">
              <li>Privacy Policy</li>
              <li>Returns</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Our Sitemap</li>
            </ul>
          </div>
          <div>
            <h4 className="font-light text-lg mb-4">Footer Menu</h4>
            <ul className="text-sm font-light text-gray-600 space-y-2">
              <li>Instagram profile</li>
              <li>New Collection</li>
              <li>Woman Dress</li>
              <li>Contact Us</li>
              <li>Latest News</li>
              <li>Purchase Theme</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs font-light text-gray-600 mb-2 lg:mb-0">
            WOODMART © 2024 CREATED BY <span className="font-normal">XTEMOS STUDIO</span>. PREMIUM E-COMMERCE SOLUTIONS.
          </p>
          <div className="flex justify-center lg:justify-start space-x-2">
            <img src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/01/payments.png" alt="" className="h-6"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

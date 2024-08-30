'use client';

import React, { useState, useEffect } from "react";
import { FaComment, FaShare } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogCard = ({ isLoading, data }) => {
  return (
    <div className="max-w-[25rem] rounded overflow-hidden shadow-lg mt-7 mb-6 group">
      {isLoading ? (
        <Skeleton height={300} />
      ) : (
        <>
          <div className="relative">
            <div className="absolute top-4 left-4 bg-white text-center py-2 px-4 z-10">
              <p className="text-sm font-bold">{data.date.split(' ')[0]}</p>
              <p className="text-xs text-gray-500">{data.date.split(' ')[1]}</p>
            </div>
            <img
              className="w-full transition duration-300 ease-in-out group-hover:brightness-50"
              src={data.image}
              alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-move-circle"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-move-circle delay-150"></div>
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-move-circle delay-300"></div>
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-around mb-2">
              <span className="absolute bottom-[7%] h-[2rem] p-1 bg-blue-200 text-white text-[0.9rem] text-center z-20 whitespace-nowrap overflow-hidden text-ellipsis transform translate-y-1/2">
                {data.category}
              </span>
            </div>
            <div className="font-normal text-[1.3rem] mb-2 text-center">{data.title}</div>
            <div className="flex justify-center items-center mb-4">
              <div className="flex items-center">
                <p className="text-gray-300 text-xs mr-2">By</p>
                <img className="w-6 h-6 rounded-full mr-2" src={data.avatar} alt="" />
                <p className="text-gray-300 text-xs leading-none">{data.author}</p>
              </div>
              <div className="flex">
                <FaComment className="text-gray-300 mx-2" />
                <FaShare className="text-gray-300 mx-2" />
              </div>
            </div>
            <p className="text-gray-400 text-[0.8rem] mb-4 text-center">{data.excerpt}</p>
            <div className="text-center">
              <a href="#" className="text-blue-300 hover:text-blue-700 text-sm font-semibold">
                CONTINUE READING
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const BlogCardGrid = () => {
  const [blogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/blogs");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const cardsPerPage = 6;
  const totalCards = blogData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return blogData.slice(startIndex, endIndex).map((data) => (
      <BlogCard key={data.id} isLoading={isLoading} data={data} />
    ));
  };

  return (
    <div className="flex justify-center p-2">
      <div className="w-full max-w-screen-xl px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {renderCards()}
        </div>
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`mx-1 px-3 py-2 border ${
                currentPage === i + 1 ? "bg-blue-300 text-white" : "bg-white text-blue-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCardGrid;

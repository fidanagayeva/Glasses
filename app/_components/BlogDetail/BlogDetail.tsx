'use client';

import BlogDetail from '@/app/_components/BlogDetail/BlogDetail';



const BlogDetail = ({ blog }) => {
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <img src={blog.image} alt={blog.title} className="w-full h-auto mb-6" />
      <div className="text-3xl font-bold mb-4">{blog.title}</div>
      <p className="text-gray-600 mb-4">{blog.date}</p>
      <div className="text-lg">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;

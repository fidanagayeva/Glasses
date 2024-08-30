import React from 'react';
import Blog from '../_components/Blog';
import BlogPagination from '../_components/BlogPagination';

const BlogPage = () => {
  return (
    <div>
      <Blog />
      <BlogPagination />
    </div>
  );
};

export default BlogPage;

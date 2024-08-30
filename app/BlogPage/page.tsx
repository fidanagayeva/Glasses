import React from 'react';
import Blog from '../_components/Blog';
import BlogPagination from '../_components/BlogPagination';
import BlogCarusel from '../_components/BlogCarusel';

const BlogPage = () => {
  return (
    <div>
      <Blog />
      <BlogPagination />
      <BlogCarusel />
    </div>
  );
};

export default BlogPage;

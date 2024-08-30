import React from 'react';

const Blog = () => {
  return (
    <div
      style={{
        backgroundImage: 'url(https://woodmart.b-cdn.net/wp-content/uploads/2021/04/blog-title-bg-opt.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '13rem', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '4rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
      }}
    >
      Woodmart Blog
    </div>
  );
};

export default Blog; 
'use client';

import { useRouter } from 'next/router';
import BlogDetail from '../../_components/blogdetail/[blogId]';

const BlogDetailPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  console.log("Blog ID:", blogId); 

  return <BlogDetail blogId={blogId} />;
};

export default BlogDetailPage;
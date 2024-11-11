import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import useApi from '../api/useApi'; 

const BlogListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const BlogCard = styled(motion.div)`
  background-color: #f7f8fa;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a4a4a;
  margin: 16px 0 8px;
`;

const BlogContent = styled.p`
  color: #6b6b6b;
  font-size: 1rem;
  line-height: 1.6;
`;

const BlogList = () => {
  // Using the useApi hook to fetch data
  const { data: blogs, error, isLoading } = useApi('https://korean-skincare-blog-backend.onrender.com/api/blog/all');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching blogs: {error}</p>;

  return (
    <BlogListContainer>
      <h2>All Blog Posts</h2>
      <BlogGrid>
        {blogs && blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <BlogImage src={blog.image_url} alt={blog.title} />
            <div>
              <BlogTitle>{blog.title}</BlogTitle>
              <BlogContent>{blog.content.slice(0, 100)}...</BlogContent>
            </div>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogListContainer>
  );
};

export default BlogList;

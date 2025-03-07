// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, error, isError, isLoading } = useQuery('posts', fetchPosts, {
    staleTime: 300000, // Data is fresh for 5 minutes
    cacheTime: 600000, // Cache data for 10 minutes
    refetchOnWindowFocus: true, // Refetch data when window is focused
    keepPreviousData: true, // Keep old data while fetching new data
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;

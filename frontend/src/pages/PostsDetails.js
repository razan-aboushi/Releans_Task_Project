import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../components/Comments';

function PostsDetails() 
{
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      const selectedPost = parsedPosts.find((post) => post.id === Number(postId));
      setPost(selectedPost);
    }
  }, [postId]);


  if (!post) 
  {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4 bg-white rounded-lg  duration-300 mt-10 flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 max-w-xxl me-9 ms-9">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-bold text-left">{post.title}</h3>
          </div>
          <div className="flex justify-between mb-2">
            <p className="text-gray-600">
              {post.author} 
            </p>
            <p className="text-gray-600">
              {post.date}
            </p>
          </div>
          <p className="text-gray-800 text-left mt-8">{post.content}</p>
        </div>
      </div>
      <Comments />
    </>
  );
}

export default PostsDetails;

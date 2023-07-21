import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostsHome() 
{
  const navigate = useNavigate();

  // Get the recent posts from local storage or set an empty array if not found
  const recentPosts = JSON.parse(localStorage.getItem('posts')) || [];

  // Limit the recent posts to four
  const limitedRecentPosts = recentPosts.slice(0, 4);

  // Handle the read more button

  const handleReadMore = (postId) => {
    navigate(`/PostsDetails/${postId}`);
  };



  return (
    <div className='mb-10'>
      <h2 className="text-3xl font-semibold mb-5">Recent posts</h2>
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
        {limitedRecentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-md p-4 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-gray-600 text-xs mb-1 text-left">{post.author}</p>
            <p className="text-gray-500 text-xs mb-1 text-left">{post.date}</p>
            <h2 className="text-lg font-semibold mb-2 text-left">{post.title}</h2>
            <p className="text-sm text-gray-700 text-left">{post.brief}</p>
            <button
              className="button text-blue-500 mt-4 hover:text-blue-700"
              onClick={() => handleReadMore(post.id)}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsHome;

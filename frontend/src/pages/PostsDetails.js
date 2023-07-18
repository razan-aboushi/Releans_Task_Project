import React, { useEffect, useState } from 'react';
import axios from "axios";
import Comments from "../components/Comments";

function PostsDetails() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get('http://example.com/posts/1');
        const data = response.data;
        setPost(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4 bg-white rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-2">
          By {post.userName} on {post.date}
        </p>
        <p className="text-gray-800">{post.content}</p>
      </div>

      <Comments />
    </>
  );
}

export default PostsDetails;

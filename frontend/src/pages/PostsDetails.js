import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Comments from '../components/Comments';
import Swal from 'sweetalert2';

function PostsDetails()
 {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts);
      const selectedPost = parsedPosts.find(post => post.id === Number(postId));
      setPost(selectedPost);
    }
  }, [postId]);


 // function to handle the delete of the post
 const handleDelete = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Once deleted, you will not be able to recover this post!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Delete',
  }).then((result) => {
    if (result.isConfirmed) {
      const storedPosts = localStorage.getItem('posts');

      if (storedPosts) {
        const parsedPosts = JSON.parse(storedPosts);

        const updatedPosts = parsedPosts.filter(post => post.id !== Number(postId));
        // Update the posts in local storage
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        // Navigate to the Posts page
        navigate('/Posts');
      }
    }
  });
};


  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mt-10 flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 max-w-xl">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-bold text-left">{post.title}</h3>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
          <p className="text-gray-600 mb-4 text-left">
            {post.author} on {post.date}
          </p>
          <p className="text-gray-800 text-left">{post.content}</p>
        </div>
      </div>
      <Comments />
    </>
  );
}

export default PostsDetails;

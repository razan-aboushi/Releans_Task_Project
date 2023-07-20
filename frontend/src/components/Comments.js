import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Comments()
 {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const navigate = useNavigate();


  
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setIsLoggedIn(true); 
    }
  }, []);

  const handleAddComment = () => {
    if (!isLoggedIn) {
      showLoginAlert();
      return;
    }

    const comment = {
      id: new Date().getTime(),
      content: newComment,
      date: new Date().toLocaleString(),
      username: 'John Doe',
    };

    setComments((prevComments) => [...prevComments, comment]);
    setNewComment('');
  };

  const handleUpdateComment = (id, updatedContent) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            content: updatedContent,
          };
        }
        return comment;
      })
    );
  };

  const handleDeleteComment = (id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== id)
    );
  };

  const showLoginAlert = () => {
    Swal.fire({
      title: 'Please log in',
      text: 'You must log in to add a comment.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Log In',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/LogIn');
      }
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      <div>
        <textarea
          className="w-1/2 p-2 border border-gray-300 rounded me-3"
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="px-4 py-2 mt-2 mr-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Post Comment
        </button>
        <button
          className="px-4 py-2 mt-2 font-semibold text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => setNewComment('')}
        >
          Cancel
        </button>
      </div>

      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4">
              <p className="text-gray-800">{comment.content}</p>
              <p className="text-gray-600">
                By {comment.username} on {comment.date}
              </p>
              <div className="flex mt-2">
                <button
                  className="mr-2 text-blue-500 hover:text-blue-600"
                  onClick={() => handleUpdateComment(comment.id, 'Updated Content')}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
}

export default Comments;

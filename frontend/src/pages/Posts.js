import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Posts() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleFormOpen = () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You must log in to create a post',
        showCancelButton: true,
        confirmButtonText: 'Log In',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/LogIn');
        }
      });
    } else {
      setIsFormOpen(true);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBriefChange = (event) => {
    setBrief(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: posts.length + 1,
      title,
      brief,
      content,
      date: new Date().toLocaleDateString(),
      author: user.username, 
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setTitle('');
    setBrief('');
    setContent('');
    setIsFormOpen(false);
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage:
            'url("https://leadgenera.lg-cms.com/wp-content/uploads/2022/09/A-Guide-To-Writing-Your-First-Blog-Post-Lead-Genera.png")',
          height: '350px',
        }}
      >
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Posts</h1>
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <h3 className="mt-10">No Posts yet</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-between mb-4">
              <p className="text-gray-500 text-left mt-2"> {user.author}</p> 

                <h3 className="text-xl text-left font-bold mb-2">{post.title}</h3>
                <span className="text-gray-500">{post.date}</span>
              </div>
              <p className="text-gray-600 text-left">{post.brief}</p>
              <button className="text-blue-500   mt-4 hover:text-blue-700">Read More</button>
            </div>
          ))}
        </div>
      )}

      <div className="m-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleFormOpen}
        >
          Create Post
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Create Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="text-left block text-gray-700 font-bold mb-2">
                  Title:
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="brief" className="text-left block text-gray-700 font-bold mb-2">
                  Brief:
                </label>
                <input
                  id="brief"
                  type="text"
                  value={brief}
                  onChange={handleBriefChange}
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="content" className="text-left block text-gray-700 font-bold mb-2">
                  Content:
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={handleContentChange}
                  className="border border-gray-400 rounded w-full py-2 px-3"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Publish
                </button>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleFormClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Posts;

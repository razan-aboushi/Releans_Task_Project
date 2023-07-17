import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserPosts() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
    
  //   axios
  //     .get(`http://localhost:5000/userPostsInProfile/${user_id}`)
  //     .then((response) => {
  //       setPosts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching posts:', error);
  //     });
  // }, []);


  function convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  return (
    <>
      <h1 className='text-center m-10 text-black' style={{fontSize:"20px"}}>" My Posts "</h1>


      <div className="user-posts m-10 text-left flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="post-card w-80 p-4 bg-white rounded-lg shadow-lg hover:translate-y-[-5px] transition-transform duration-300 ease-in-out" key={post.post_id}>
            <div className="post-header flex items-center mb-2">
              <img
                src={post.profile_picture}
                alt="User"
                className="avatar w-10 h-10 rounded-full object-cover mr-2"
              />
              <div>
                <span className="username font-bold text-black">{post.username}</span>
                <span className="created-at text-xs text-gray-500 block">{convertDate(post.created_at)}</span>
              </div>
            </div>
            <h2 className="text-black text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-black">{post.content}</p>
           
           
          </div>
        ))}
      </div>
    </>

  );
}

export default UserPosts;
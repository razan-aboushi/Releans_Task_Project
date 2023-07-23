import React, { useState, useEffect } from 'react';

function UserPosts() 
{
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // get the user from the local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // get the post from the local storage
  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  
  // cnvert the date
  function convertDate() {
    const date = new Date().toLocaleDateString();
    return date;
  }


  return (
    <>
      <h1 className='text-center m-10 text-black' style={{ fontSize: "20px" }}>" My Posts "</h1>

      {posts.length === 0 ? (
        <p className="text-center m-10">You haven't added any posts yet.</p>
      ) : (
        <div className="user-posts m-10 text-left flex flex-wrap gap-4">
          {posts.map((post) => (
            <div className="post-card mt-5 mb-5 w-60 p-4 bg-white rounded-lg shadow-lg hover:translate-y-[-5px] transition-transform duration-300 ease-in-out" key={post.id}>
              <div className="post-header flex items-center mb-2">
                <div>
                  <span className="username font-bold text-black">{user.username}</span>
                  <span className="created-at text-xs text-gray-500 block">{convertDate(post.created_at)}</span>
                </div>
              </div>
              <h2 className="text-black text-xl font-bold mb-2">{post.title}</h2>
              <p className="text-black">{post.brief}</p>
            </div>
          ))}
        </div>

      )}
    </>
  );
}

export default UserPosts;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/Logo_Project.png";

function Nav() 
{
  const [showLinks, setShowLinks] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

// To show or hide links
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


// Get the user to check if the user found and log in convert the log in into log out and appear profile
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  // Handle user log out of the website
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  
  return (
    <header className='shadow'>
      <nav className="bg-white dark:bg-gray-900">
        <div className="container mx-auto py-4 flex flex-wrap items-center justify-between p-5">
          <h1 className="ms-5 text-2xl font-bold text-gray-50">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-15 w-20" />
            </Link>
          </h1>
          <div className="hidden lg:flex lg:gap-x-12 items-center space-x-2" style={{ columnGap: "26rem" }}>
            <div className='flex justify-center' style={{ columnGap: "2rem" }}>
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 22V12h6v10m-6 0l6-3"
                    />
                  </svg>
                </span>
                <Link to="/">
                  <span className="text-gray-50">Home</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </span>
                <Link to="/Posts">
                  <span className="text-gray-50">Posts</span>
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <Link to="/Albums">
                  <span className="text-gray-50">Albums</span>
                </Link>
              </div>
            </div>
            <div className="lg:flex hidden items-center space-x-2">
              {user ? (
                <>
                  <Link to="/UserProfile">
                    <button className="text-gray-700 bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded">
                      Profile
                    </button>
                  </Link>
                  <button
                    className="text-gray-700 bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/LogIn">
                  <button className="text-gray-700 bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded">
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              className="text-gray-50 focus:outline-none"
              onClick={toggleLinks}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {showLinks ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
            {showLinks && (
              <div className="mt-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded"
                >
                  Home
                </Link>
                <Link
                  to="/Posts"
                  className="block px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded mt-1"
                >
                  Posts
                </Link>
                <Link
                  to="/Albums"
                  className="block px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded mt-1"
                >
                  Albums
                </Link>
                {!user ? (
                  <Link
                    to="/LogIn"
                    className="block px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded mt-1"
                  >
                    Log In
                  </Link>
                ) : (
                  <>
                    <Link to="/UserProfile">
                      <button className="text-gray-700 bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded mt-1 me-1">
                        Profile
                      </button>
                    </Link>
                    <button
                      className="text-gray-700 bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded mt-1"
                      onClick={handleLogout}
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

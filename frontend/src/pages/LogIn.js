import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LogIn()
 {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle the log in submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === 'razanalqaddoumi@gmail.com' &&
      password === 'razanalqaddoumi@gmail.com'
    ) {

      // Store the user details in local storage when enter to the website
      const user = {
        id: 1,
        username: 'Razan Aboushi',
        phone_number: '0780577727',
        email: 'razanalqaddoumi@gmail.com',
        password: 'razanalqaddoumi@gmail.com',
      };
      localStorage.setItem('user', JSON.stringify(user));

      // Navigate to the user profile 
      navigate('/UserProfile');

      window.location.reload();
    } else {
      setError('The email or password are not correct. Please try again.');
    }
  };

  

  return (
    <section className="h-screen">
      <div className="container mx-auto h-full px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:justify-start">
          <div className="mb-12 md:mb-0">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:ml-6">
            <form className="w-full md:w-auto mt-20" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black-900 dark:text-black text-left"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="bg-gray-50 border border-gray-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black-900 dark:text-black text-left mt-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="•••••••••••••••••••••••••"
                  className="bg-gray-50 border border-gray-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-start">
                  <div className="flex items-start h-5 mt-2">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm mt-2">
                    <label
                      htmlFor="remember"
                      className="text-black-500 dark:text-black-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 mt-2"
                >
                  Forgot password?
                </Link>
              </div>
              {error && (
                <p className="text-red-500 mt-3">{error}</p>
              )}
              <button
                type="submit"
                className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-5 mb-3"
                style={{border:"1px solid black"}}    >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;

import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';



function Footer() 
{
  return (
    <footer className="bg-white dark:bg-gray-900 w-full p-8 text-white">
      <div className="dark:bg-gray-900 flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between ">
        <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 me-5">
         
          <li>
            <Link
              as="a"
              to="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/Posts"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              as="a"
              to="/Albums"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Albums
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Razan Aboushi
      </Typography>
    </footer>
  )
}

export default Footer;
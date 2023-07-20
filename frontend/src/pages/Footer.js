import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import logo from "../images/Logo_Project.png";



function Footer() 
{
  return (
    <footer className="bg-white dark:bg-gray-900 w-full p-8 text-white">
      <div className="dark:bg-gray-900 flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-20" />
        <ul className="flex flex-wrap items-center text-center gap-y-2 gap-x-8">
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
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              to="https://www.facebook.com/rooza.alqadoumi?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500">
              Facebook
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/razan-aboushi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/razan-aboushi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        Copy Rights &copy; 2023 <Link to="https://github.com/razan-aboushi"> Razan Aboushi </Link>
      </Typography>
    </footer>
  );
}

export default Footer;

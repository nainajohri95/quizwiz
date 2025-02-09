import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { useTheme } from '../../theme-context';

const Navbar = () => {

  const {theme, toggleTheme} = useTheme()
  

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 shadow-lg py-4 px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          src="/assets/QUIZWIZ.jpg"
          alt="QuizWiz Logo"
          className="w-16 h-16 rounded-full border-4 border-white shadow-md transform transition duration-300 hover:scale-110"
        />
        <div className="text-white text-2xl font-bold">QuizWiz</div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-grow justify-center lg:text-lg">
        <div className="flex items-center space-x-6 text-white font-bold">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/game" className="hover:text-gray-200">Games</Link>
          <Link to="/leaderboard" className="hover:text-gray-200">Leaderboard</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
        </div>
      </div>


      <button
        onClick={toggleTheme}
        className="p-2 rounded  dark:bg-gray-700 text-gray-800 dark:text-white flex items-center"
      >
        {theme === "dark" ? <LightModeOutlinedIcon  className="text-yellow-400 dark:text-yellow-300 w-9 h-9"/> : <DarkModeOutlinedIcon className='text-white w-9 h-9'/>}
      </button>
    </nav>
  );
};

export default Navbar;

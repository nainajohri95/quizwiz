import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    console.log(darkMode ? 'Switched to Light Mode' : 'Switched to Dark Mode');
  };

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

      <div className="flex items-center space-x-4 ml-6">
        {darkMode ? (
          <LightModeOutlinedIcon
            onClick={handleThemeChange}
            sx={{
              fontSize: 32,
              color: 'yellow', 
              cursor: 'pointer',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)', 
              },
            }}
          />
        ) : (
          <DarkModeOutlinedIcon
            onClick={handleThemeChange}
            sx={{
              fontSize: 32,
              color: 'white', 
              cursor: 'pointer',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.1)', 
              },
            }}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

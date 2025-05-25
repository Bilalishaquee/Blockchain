import React from 'react';
import { Activity } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark-800 bg-opacity-80 backdrop-blur-lg z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Activity className="h-8 w-8 text-primary-500 mr-2" />
          <span className="text-xl font-orbitron font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Blockchain Project
          </span>
        </div>
        <div className="hidden md:flex space-x-6 font-orbitron text-sm">
          <a href="#" className="text-white hover:text-primary-400 transition duration-200">Home</a>
          <a href="#" className="text-white hover:text-primary-400 transition duration-200">Features</a>
          <a href="#" className="text-white hover:text-primary-400 transition duration-200">About</a>
          <a href="#" className="text-white hover:text-primary-400 transition duration-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
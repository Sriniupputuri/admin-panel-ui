import React from 'react';
import { LinkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const Header = ({ onMenuClick }) => {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <button 
          className="lg:hidden text-gray-500 hover:text-gray-700"
          onClick={onMenuClick}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-semibold">My dashboard</h1>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
          <LinkIcon className="w-4 h-4" />
          Copy link
        </button>
        <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
          Visit store
        </button>
      </div>
    </header>
  );
};

export default Header;
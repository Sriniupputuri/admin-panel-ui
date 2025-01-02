import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { menuItems } from '../Sidebar';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white">
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
                <span className="font-medium">Untitled UI</span>
              </div>
              <button onClick={onClose}>
                <XMarkIcon className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-4 py-4">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <item.icon className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
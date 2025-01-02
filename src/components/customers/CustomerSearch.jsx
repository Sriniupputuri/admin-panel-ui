import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const CustomerSearch = ({ value, onChange }) => {
  return (
    <div className="relative mb-6">
      <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search customers..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      />
    </div>
  );
};

export default CustomerSearch;
import React from 'react';

const StatCard = ({ title, value, change, icon: Icon }) => {
  const isPositive = parseFloat(change) > 0;
  
  return (
    <div className="bg-white p-6 rounded-lg border">
      <div className="flex justify-between items-start mb-4">
        {Icon && <Icon className="w-5 h-5 text-gray-400" />}
        <span className={`text-xs font-medium ${isPositive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'} px-2 py-1 rounded-full`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>
      <h3 className="text-sm text-gray-500 mb-1">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
};

export default StatCard;
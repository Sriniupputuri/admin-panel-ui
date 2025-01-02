import React from 'react';

const timeRanges = [
  { label: '12m', value: '12m' },
  { label: '30d', value: '30d' },
  { label: '7d', value: '7d' },
  { label: '24h', value: '24h' }
];

const TimeFilter = ({ selected = '7d', onChange }) => {
  return (
    <div className="flex gap-2">
      {timeRanges.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onChange?.(value)}
          className={`px-3 py-1 text-sm rounded-full ${
            selected === value
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;
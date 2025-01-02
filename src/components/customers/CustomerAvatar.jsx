import React from 'react';

const CustomerAvatar = ({ name, className = "w-8 h-8" }) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className={`${className} bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-medium`}>
      {initials}
    </div>
  );
};

export default CustomerAvatar;
import React from 'react';

const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  return (
    <div className="flex items-center justify-between mt-4 py-4">
      <button
        className="text-gray-600 hover:text-gray-900"
        onClick={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange?.(page)}
            className={`w-8 h-8 rounded-full ${
              currentPage === page
                ? 'bg-gray-900 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="text-gray-600 hover:text-gray-900"
        onClick={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
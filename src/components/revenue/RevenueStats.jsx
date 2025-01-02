import React from 'react';
import { formatCurrency } from '../../utils/formatters';
import TimeFilter from '../stats/TimeFilter';

const RevenueStats = ({ netRevenue, percentageChange, timeRange, onTimeRangeChange }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h3 className="text-sm text-gray-500">Net revenue</h3>
        <p className="text-2xl font-semibold">{formatCurrency(netRevenue)}</p>
        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
          +{percentageChange}%
        </span>
      </div>
      <TimeFilter selected={timeRange} onChange={onTimeRangeChange} />
    </div>
  );
};

export default RevenueStats;
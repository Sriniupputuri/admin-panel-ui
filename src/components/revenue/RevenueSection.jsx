import React from 'react';
import RevenueStats from './RevenueStats';
import RevenueChart from './RevenueChart';

const RevenueSection = ({ timeRange, onTimeRangeChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg border mb-8">
      <RevenueStats
        netRevenue={7804.16}
        percentageChange={2.4}
        timeRange={timeRange}
        onTimeRangeChange={onTimeRangeChange}
      />
      <RevenueChart timeRange={timeRange} />
    </div>
  );
};

export default RevenueSection;
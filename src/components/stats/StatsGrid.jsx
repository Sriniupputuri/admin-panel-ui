import React from 'react';
import StatCard from './StatCard';
import { CurrencyDollarIcon, EyeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { formatCurrency, formatNumber } from '../../utils/formatters';

const StatsGrid = () => {
  const stats = [
    {
      title: "All revenue",
      value: formatCurrency(8746.22),
      change: "+2.4",
      icon: CurrencyDollarIcon
    },
    {
      title: "Page views",
      value: formatNumber(12440),
      change: "+6.2",
      icon: EyeIcon
    },
    {
      title: "Active now",
      value: formatNumber(96),
      change: "+0.8",
      icon: UserGroupIcon
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
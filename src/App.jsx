import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import StatsGrid from './components/stats/StatsGrid';
import RevenueSection from './components/revenue/RevenueSection';
import CustomerTable from './components/customers/CustomerTable';

function App() {
  const [timeRange, setTimeRange] = useState('7d');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      <div className="flex-1 p-4 lg:pl-64 lg:ml-4 overflow-y-scroll">
        <div className="max-w-7xl mx-auto">
          <Header onMenuClick={() => setIsMobileMenuOpen(true)} />
          <StatsGrid />
          <RevenueSection 
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
          />
          <CustomerTable />
        </div>
      </div>
    </div>
  );
}

export default App;
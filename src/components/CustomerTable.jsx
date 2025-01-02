import React from 'react';

const customers = [
  {
    id: 1,
    name: 'Lily-Rose Chedjou',
    username: '@lilyrose',
    email: 'lilyrose@gmail.com',
    date: 'Jan 16, 2025',
    amount: 300.14,
  },
  {
    id: 2,
    name: 'Caitlyn King',
    username: '@caitlynk',
    email: 'hello@caitlynk.com',
    date: 'Jan 15, 2025',
    amount: 86.32,
  },
  // Add more customers as needed
];

const CustomerTable = () => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-500 px-4">
              <th className="pb-4">Customer</th>
              <th className="pb-4">Email</th>
              <th className="pb-4">Date</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-t px-4">
                <td className="py-4">
                  <div className="flex items-center gap-3" style={{padding: '0px 24px'}}>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-gray-500">{customer.username}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 text-gray-500">{customer.email}</td>
                <td className="py-4 text-gray-500">{customer.date}</td>
                <td className="py-4">${customer.amount.toFixed(2)}</td>
                <td className="py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerTable;
import React from 'react';
import CustomerAvatar from './CustomerAvatar';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { formatCurrency, formatDate } from '../../utils/formatters';

const CustomerRow = ({ customer }) => {
  return (
    <tr className="border-t">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <CustomerAvatar name={customer.name} />
          <div>
            <div className="font-medium">{customer.name}</div>
            <div className="text-sm text-gray-500">{customer.username}</div>
          </div>
        </div>
      </td>
      <td className="py-4 text-gray-500">{customer.email}</td>
      <td className="py-4 text-gray-500">{formatDate(customer.date)}</td>
      <td className="py-4">{formatCurrency(customer.amount)}</td>
      <td className="py-4">
        <button className="text-gray-400 hover:text-gray-600">
          <EllipsisVerticalIcon className="w-5 h-5" />
        </button>
      </td>
    </tr>
  );
};

export default CustomerRow;
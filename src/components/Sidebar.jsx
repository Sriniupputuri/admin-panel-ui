import React from 'react';
import {
  HomeIcon,
  ChartBarIcon,
  FolderIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  UsersIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline';

export const menuItems = [
  { icon: HomeIcon, text: 'Home' },
  { icon: ChartBarIcon, text: 'Dashboard' },
  { icon: FolderIcon, text: 'Projects' },
  { icon: ClipboardDocumentListIcon, text: 'Tasks' },
  { icon: ChartPieIcon, text: 'Reporting' },
  { icon: UsersIcon, text: 'Users' },
  { icon: Cog6ToothIcon, text: 'Settings' },
  { icon: QuestionMarkCircleIcon, text: 'Support' }
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-[100vh] p-4 border-r hidden lg:block fixed overflow-y-scroll">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-purple-100 rounded-full"></div>
        <span className="font-medium">Untitled UI</span>
      </div>

      <div className="space-y-1">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium mb-2">Verify this device</h3>
          <p className="text-sm text-gray-500 mb-4">
            Open the app and scan the QR code below to verify this device.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg flex justify-center">
            <QrCodeIcon className="w-24 h-24 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="border rounded-lg p-4 flex justify-between">
          <div className='font-bold text-gray-400'>USER</div>
          <UsersIcon className="w-6 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
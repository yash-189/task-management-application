
import React from 'react';
import Sidebar from '../components/sidebar/Sidebar';

export default function DashboardLayout({
  children,
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      
    <Sidebar />
    <div className="flex flex-1 flex-col overflow-hidden">
      <main className="flex-1 overflow-y-auto py-6 px-6">
        {children}
      </main>
    </div>
  </div>
  );
}


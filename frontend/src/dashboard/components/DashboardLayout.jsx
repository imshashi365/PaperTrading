import React from 'react';
import { Link } from 'react-router-dom';
import { Home, PieChart, LineChart, Settings } from 'lucide-react';

const DashboardLayout = ({ children }) => {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/images/MindTradeLogo.png" alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-blue-600">MindTrade</span>
          </Link>
        </div>
        
        <nav className="mt-8">
          <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
            <Home className="w-5 h-5 mr-3" />
            Home
          </Link>
          <Link to="/dashboard/portfolio" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
            <PieChart className="w-5 h-5 mr-3" />
            Portfolio
          </Link>
          <Link to="/dashboard/trading" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
            <LineChart className="w-5 h-5 mr-3" />
            Trading
          </Link>
          <Link to="/dashboard/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
            <Settings className="w-5 h-5 mr-3" />
            Settings
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Back to Home
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Calculator className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Tax Optimizing Assistant</span>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`
              }
            >
              Income
            </NavLink>
            <NavLink
              to="/deductions"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`
              }
            >
              Deductions & Exemptions
            </NavLink>
            <NavLink
              to="/summary"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`
              }
            >
              Summary
            </NavLink>
            <NavLink
              to="/tax-info"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive ? 'bg-indigo-700' : 'hover:bg-indigo-500'
                }`
              }
            >
              Tax Information
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
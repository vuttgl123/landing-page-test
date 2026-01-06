
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { PageType } from '../types';

interface NavbarProps {
  activePage: PageType;
  onPageChange: (id: PageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onPageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onPageChange(PageType.HOME)}>
            <span className="text-2xl font-serif tracking-tighter">K&C</span>
            <span className="ml-2 text-xs tracking-[0.3em] uppercase hidden sm:block">Komorebi & Couture</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id as PageType)}
                className={`text-[10px] uppercase tracking-widest transition-colors duration-200 ${
                  activePage === item.id ? 'text-black font-bold border-b border-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id as PageType);
                  setIsOpen(false);
                }}
                className="block w-full text-center py-4 text-xs uppercase tracking-widest text-gray-700 border-b border-gray-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

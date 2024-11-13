import React, { useState } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Phone, FolderGit2 } from 'lucide-react';

const Sidebar = ({ activeSection, onNavClick }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavItemClick = (sectionId) => {
    onNavClick(sectionId);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'project', icon: FolderGit2, label: 'Projects' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'contact', icon: Phone, label: 'Hire me' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-gray-800 rounded-lg text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full z-40 w-64 bg-gray-900 shadow-lg
        transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full py-8">
          {/* Logo/Title */}
          <div className="px-6 mb-8">
            <h1 className="text-2xl font-bold text-white">
              Portfolio<span className="text-yellow-400">.</span>
            </h1>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 px-4">
            {navItems.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => handleNavItemClick(id)}
                className={`
                  w-full flex items-center px-4 py-3 mb-3 rounded-lg
                  transition-colors duration-200
                  ${activeSection === id 
                    ? 'bg-yellow-400 text-gray-900 font-medium' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-yellow-400'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="ml-4">{label}</span>
              </button>
            ))}
          </div>

          {/* Optional: Footer Content */}
          <div className="px-6 py-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © 2024 Portfolio
            </p>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content Wrapper */}
      <div className="md:ml-64 transition-all duration-300">
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Sidebar;
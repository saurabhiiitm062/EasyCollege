import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#01024D]  text-center py-6 text-gray-600 text-sm border-t border-gray-300">
      <p>© {new Date().getFullYear()} EasyCollege. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

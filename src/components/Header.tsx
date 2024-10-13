// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-500 flex justify-between items-center p-4">
      <div className="flex items-center">
        <div className="text-white mr-2">
          <i className="fa fa-clock-o"></i>
        </div>
        <span className="text-white">Singapur Airlines</span>
      </div>
      <div className="rounded-full bg-white h-8 w-8 flex items-center justify-center">
        <span className="text-blue-500 font-bold">CN</span>
      </div>
    </header>
  );
};

export default Header;

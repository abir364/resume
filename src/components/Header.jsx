import React from 'react';

const Header = () => {
  return (
    <div className="flex items-center justify-around text-white bg-blue-500 px-4 py-8 ">
      <div className="text-3xl font-bold flex-1">Abir Hossain</div>
      <div className="text-xl w-48">
        <button className="hover:bg-blue-600 px-2 py-1 rounded-xl">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Header;

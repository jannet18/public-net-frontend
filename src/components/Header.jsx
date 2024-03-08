import React, { useEffect, useState } from "react";
import Search from "./Search";

const Header = ({ handleSearchChange }) => {
  return (
    <header className="bg-slate-900 flex align-center justify-between  text-gray-300 relative p-6">
      <h1>Netspeed</h1>
      <Search handleSearchChange={handleSearchChange} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </header>
  );
};

export default Header;

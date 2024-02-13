/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-serif font-bold ">
        Divine Enterprise
      </h1>
      <ul className="md:flex hidden">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={23} /> : <AiOutlineMenu size={23} />}
      </div>
      <div
        className={
          nav
            ? "fixed h-full left-0 top-0 w-[60%] ease-in-out duration-500 bg-[#13063c] border-r border-r-gray-900"
            : "fixed left-[-100%]"
        }
      >
        <ul className="uppercase mt-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Dashboard</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

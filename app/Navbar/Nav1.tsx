import React from "react";
import Logo from "../Logo";

const Nav1 = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8 sm:px-12 md:px-24 xl:px-44 pt-7">
        <div className="flex items-center space-x-6 lg:space-x-10">
          <Logo />
          <div className="hidden md:block sm:space-x-4 md:space-x-7 text-base md:text-xl">
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Home
            </button>
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              About Us
            </button>
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Pricing
            </button>
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Features
            </button>
          </div>
        </div>
        <button className="bg-black text-white py-2 px-7 rounded-md hover:bg-gray-800 duration-300 active:bg-slate-200 active:text-black">
          <span className="text-sm">Download</span>
        </button>
      </div>
    </>
  );
};

export default Nav1;

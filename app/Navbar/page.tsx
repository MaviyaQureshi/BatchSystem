import React from "react";
import Logo from "../Logo";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-8 sm:px-12 md:px-24 xl:px-44 pt-7">
        <div className="flex items-center space-x-6 lg:space-x-10">
          <Logo />
          <div className="hidden md:block sm:space-x-4 md:space-x-7 text-base md:text-xl">
            <span className="font-extrabold text-[#FF5555]">Home</span>
            <span className="font-semibold">About Us</span>
            <span className="font-semibold">Pricing</span>
            <span className="font-semibold">Features</span>
          </div>
        </div>
        <button className="bg-black text-white py-2 px-7 rounded-md ">
          <span className="text-sm">Download</span>
        </button>
      </div>
    </>
  );
};

export default NavBar;

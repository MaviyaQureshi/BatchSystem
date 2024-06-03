"use client";
import React, { useState } from "react";
import Logo from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPen } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons/faX";

const Nav2 = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState("hidden");

  const menuToggle = () => {
    setOpen(!open);
    if (visible == "hidden") {
      setVisible("block");
    } else {
      setVisible("hidden");
    }
  };

  return (
    <div className="flex items-center justify-between px-10 xs:px-8 sm:px-12 md:px-24 xl:px-44 pt-7 w-[40rem] sm  :w-full">
      <Logo />
      <button onClick={menuToggle} className="z-50">
        {open ? (
          <FontAwesomeIcon icon={faX} width={30} height={30} className="z-50" />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            width={30}
            height={30}
            className="z-50"
          />
        )}
      </button>
      <div
        className={`${visible} flex w-[40rem] sm:w-full items-center justify-center h-[100vh] bg-gray-50 inset-0 absolute z-10`}
      >
        <ul className="flex flex-col justify-center items-center space-y-12 w-full">
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Home
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              About Us
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Pricing
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold focus:font-extrabold focus:text-[#FF5555] hover:cursor-pointer duration-150">
              Features
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold py-3 px-20 bg-black text-white rounded-md hover:bg-gray-800 duration-300 active:bg-slate-200 active:text-black">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;

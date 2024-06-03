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
    <div className="flex items-center justify-between px-10 xs:px-8 sm:px-12 md:px-24 xl:px-44 pt-7 w-[40rem] xs:w-full">
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
        className={`${visible} flex w-[40rem] xs:w-full items-center justify-center h-full bg-gray-50 inset-0 absolute z-10`}
      >
        <ul className="flex flex-col justify-center items-center space-y-12 w-full">
          <li className="flex justify-center w-full py-4">
            <button className="font-extrabold text-[#FF5555] hover:cursor-pointer">
              Home
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold">About Us</button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold">Pricing</button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold hover:cursor-pointer">
              Features
            </button>
          </li>
          <li className="flex justify-center w-full py-4">
            <button className="font-semibold py-3 px-20 bg-black text-white rounded-md">
              Download
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav2;

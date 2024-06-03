import React from "react";
import logo from "../public/logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="flex items-center space-x-1">
        <Image src={logo} width={35} height={35} alt="Picture of the author" />
        <div>
          <span className="text-2xl font-extrabold">uifry</span>
          <sup>
            <sup className="text-[7px] font-medium">TM</sup>
          </sup>
        </div>
      </div>
    </>
  );
};

export default Logo;

import React from "react";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";

const NavBar = () => {
  return (
    <>
      <span className="hidden md:block">
        <Nav1 />
      </span>
      <span className="block md:hidden">
        <Nav2 />
      </span>
    </>
  );
};

export default NavBar;

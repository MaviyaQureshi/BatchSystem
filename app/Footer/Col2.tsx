import React from "react";

const Col2 = () => {
  return (
    <>
      <div>
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Links
        </span>
        <div className="flex flex-col space-y-4 mt-4 font-medium text-xs sm:text-sm lg:text-base">
          <span>Home</span>
          <span>About Us</span>
          <span>Bookings</span>
          <span>Blog</span>
        </div>
      </div>
    </>
  );
};

export default Col2;

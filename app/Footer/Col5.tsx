import React from "react";

const Col5 = () => {
  return (
    <>
      <div>
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Newsletter
        </span>
        <div className="flex flex-col space-y-4 mt-4 font-medium text-xs sm:text-sm lg:text-base ">
          <span>Take Tour</span>
          <span>
            <input
              type="text"
              placeholder="Your Email"
              className="z-1 w-44 sm:w-48 lg:w-64 pr-20 sm:pr-28 lg:pr-36 pl-4 sm:pl-3 lg:pl-4 py-4 sm:py-3 lg:py-4 font-light text-sm active: outline-0 shadow-lg"
            />
            <button className="z-100 -ml-16 sm:-ml-24 lg:-ml-32 bg-black text-white py-[0.88rem] sm:py-[0.6rem] lg:py-[0.88rem] px-7 sm:px-4 lg:px-7 rounded-md font-light shadow-lg hover:bg-gray-800 duration-300 active:bg-slate-200 active:text-black">
              Subscribe
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default Col5;

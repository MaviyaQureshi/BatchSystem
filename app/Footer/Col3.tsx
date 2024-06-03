import React from "react";

const Col3 = () => {
  return (
    <>
      <div>
        <span className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Legal
        </span>
        <div className="flex flex-col space-y-4 mt-4 font-medium text-xs sm:text-sm lg:text-base">
          <span>Terms Of Use</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </>
  );
};

export default Col3;

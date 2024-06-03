import Col1 from "./Col1";
import Col2 from "./Col2";
import Col3 from "./Col3";
import Col4 from "./Col4";
import Col5 from "./Col5";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex justify-center space-y-1 md:space-x-4 lg:space-x-8 xl:space-x-20 ml-20 md:ml-0 mt-16 xl:mr-16">
          <Col1 />
          <Col2 />
          <Col3 />
          <Col4 />
          <Col5 />
        </div>
        <hr className=" border-gray-400 w-2/3 mt-20 rounded-full lg:mr-16" />
        <span className="my-7 text-sm font-bold tracking-tighter">
          Copyright 2022 Uifry.Com All Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;

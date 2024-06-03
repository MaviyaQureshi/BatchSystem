import blur from "../../public/blur.png";
import Image from "next/image";
import ready from "../../public/practice.png";
import iphone from "../../public/iphone.png";

const GetStarted = () => {
  return (
    <>
      <div className="flex relative w-[40rem] xs:w-fit">
        <div className="flex flex-col absolute items-start inset-20 md:inset-32 lg:inset-36 xl:inset-56 text-white pt-20 sm:pt-24 md:pt-28 lg:pt-36 ml-10">
          <span className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter">
            Ready To Get Started?
          </span>
          <span className="pt-4 w-[50%] text-[10px] sm:text-xs md:text-base">
            Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate.
          </span>
          <button className="flex items-center space-x-3 justify-center py-2 md:py-4 px-5 md:px-10 mt-6 rounded-md bg-white focus:bg-slate-200 duration-200 ">
            <span className="text-black text-xs sm:text-sm md:text-lg font-medium">
              Download App
            </span>
            <Image src={iphone} alt="" className="w-[15px] md:w-[20px]" />
          </button>
        </div>
        <Image src={ready} alt="" className="" />
      </div>
    </>
  );
};

export default GetStarted;

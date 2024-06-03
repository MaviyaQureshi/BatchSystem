import Image from "next/image";
import Imag1 from "../../public/Image 1.svg";
import Imag11 from "../../public/Image 1-1.svg";
import Imag12 from "../../public/Image 1-2.svg";
import arrow from "../../public/right-arrow.png";
import video from "../../public/video.png";

const Hero = () => {
  return (
    <>
      <div className="flex justify-between px-10">
        <div className="z-2 flex flex-col relative">
          <Image src={Imag12} alt="GO back" className="md:pl-20 xl:pl-10" />
          <div className="flex flex-col absolute inset-0 ml-12 sm:ml-0 sm:pl-16 xl:pl-36 pt-20 w-[34rem] lg:w-[39rem] xl:w-[50rem]">
            <span className="font-extrabold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              Make The Best Financial Decisions
            </span>
            <span className="w-4/5 sm:w-full pt-4 lg:pt-6 xl:pt-10">
              Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
              faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
            </span>
          </div>
          <div className="flex items-center ml-12 sm:ml-16 xl:ml-36 space-x-10 absolute inset-0 -mt-36 sm:-mt-20 lg:-mt-24 xl:-mt-40">
            <button className="flex items-center space-x-2 py-3 px-10 bg-black text-white rounded-md">
              <span>Get Started</span>
              <Image src={arrow} width={25} height={10} alt="" />
            </button>
            <button className="flex items-center space-x-3 ">
              <Image src={video} width={35} height={20} alt="" />
              <span className="text-xl font-medium">Watch Video</span>
            </button>
          </div>
          <Image
            src={Imag11}
            alt="GO back"
            className="mt-20 md:mt-28 xl:mt-0 sm:pl-16 xl:pl-28 w-[500px] lg:w-[550px] xl:w-[700px]"
          />
        </div>
        <Image
          src={Imag1}
          alt="GO back"
          className="hidden md:block  md:w-[400px] lg:w-[550px] xl:w-[700px]"
        />
      </div>
    </>
  );
};

export default Hero;

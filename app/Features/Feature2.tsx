import React from "react";
import Image from "next/image";
import img3 from "../../public/Image 3.svg";
import bell from "../../public/bell.png";

const Feature2 = () => {
  return (
    <>
      <div className="flex items-center justify-end sm:mr-10 space-x-8 mt-16 md:mt-0 ">
        <div className="flex flex-col ml-20 md:ml-24 lg:ml-32 xl:ml-40">
          <span className="tracking-widest font-medium text-[#FF5555] text-sm md:text-base lg:text-lg xl:text-xl">
            ADVANTAGES
          </span>
          <h1 className="tracking-tighter text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-10">
            Why Choose Uifry?
          </h1>
          <div className="flex items-center space-x-4">
            <Image src={bell} alt="" />
            <span className="tracking-tight font-extrabold text-base md:text-lg lg:text-xl xl:text-3xl">
              Clever Notifications
            </span>
          </div>
          <span className="text-[#7C7C7C] mt-8 font-medium text-xs md:text-sm lg:text-base w-48">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </span>
        </div>
        <Image
          src={img3}
          alt=""
          className="w-[300px] sm:w-[400px] md:w-[550px] lg:w-[600px] xl:w-[850px]"
        />
      </div>
    </>
  );
};

export default Feature2;

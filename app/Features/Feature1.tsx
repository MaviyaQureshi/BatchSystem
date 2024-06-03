import React from "react";
import Image from "next/image";
import img2 from "../../public/Image 2.svg";
import star from "../../public/orange star.png";
import cube from "../../public/orange cube.png";
import hypercube from "../../public/orange hypercube.png";

const map = [
  {
    id: 0,
    symbol: star,
    headline: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
  {
    id: 1,
    symbol: cube,
    headline: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
  {
    id: 2,
    symbol: hypercube,
    headline: "Budgeting Intervals",
    description:
      "Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.",
  },
];

const Feature1 = () => {
  return (
    <>
      <div className="flex items-center relative mt-72 ml-24 xs:mt-0 xs:ml-0 w-[35rem] xs:w-fit">
        <Image
          src={img2}
          alt=""
          className="ml-4 xl:ml-14 hidden sm:block sm:w-[400px] md:w-[550px] lg:w-[650px] xl:w-[750px]"
        />
        <div className="flex flex-col">
          <span className="tracking-widest font-medium text-[#FF5555] text-sm md:text-lg lg:text-xl">
            FEATURES
          </span>
          <h1 className="tracking-tighter text-3xl md:text-4xl lg:text-5xl font-extrabold mb-10">
            Uifry Premium
          </h1>
          {map.map((element) => (
            <div
              key={element.id}
              className="mb-12 leading-7 w-[85%] text-sm md:text-base"
            >
              <span className="flex mb-2">
                <Image
                  src={element.symbol}
                  alt=""
                  height={25}
                  key={element.id}
                />
                <div className="font-bold ml-2" key={element.id}>
                  {element.headline}
                </div>
              </span>
              <div className="text-[#7C7C7C] font-medium tracking-wide text-xs md:text-sm lg:text-base">
                {element.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Feature1;

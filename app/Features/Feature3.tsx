import Image from "next/image";
import img4 from "../../public/Image 4.svg";
import round from "../../public/round star.png";
import star from "../../public/Star 7.png";

const Feature3 = () => {
  return (
    <>
      <div className="flex items-center lg:ml-14 space-x-8">
        <Image
          src={img4}
          alt=""
          className="w-[250px] sm:w-[400px] lg:w-[600px] xl:w-[850px]"
        />
        <div className="flex flex-col pt-48">
          <div className="flex items-center space-x-4">
            <Image src={round} className="w-[30px] md:w-full" alt="" />
            <span className="tracking-tight font-extrabold text-xl md:text-3xl">
              Fully Customizable
            </span>
          </div>
          <span className="text-[#7C7C7C] mt-8 font-medium w-[90%] text-xs md:text-base xl:w-3/4">
            Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
            In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus,
            Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse
            Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
            Suspendisse Aliquam.
          </span>
          <div className="flex justify-end mr-24 sm:mr-64 mt-32 sm:w-full sm:mt-48">
            <Image src={star} alt="" className="w-10 sm:w-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature3;

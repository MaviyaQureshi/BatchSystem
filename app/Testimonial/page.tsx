import Image from "next/image";
import img5 from "../../public/Image 5.svg";
import user from "../../public/users.png";

const Testimonial = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-[40rem] xs:w-full mb-14 sm:mb-10 md:mb-0">
        <span className="font-medium text-base md:text-2xl">Testimonial</span>
        <span className="text-3xl md:text-5xl font-extrabold tracking-tighter">
          What Our Users
        </span>
        <span className="text-3xl md:text-5xl font-extrabold tracking-tighter">
          Say About Us?
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src={img5}
          alt=""
          className="hidden sm:block sm:w-[400px] md:w-[550px] lg:w-[700px] xl:w-[850px]"
        />
        <div className="flex flex-col ml-20 xs:ml-0 w-[40rem] xs:w-[40%] lg:w-[35%]">
          <span className="tracking-tight font-extrabold text-xl md:text-3xl">
            The Best Financial Accounting App Ever!
          </span>
          <span className="text-[#7C7C7C] mt-8 w-[27rem] xs:w-fit font-medium text-sm md:text-base lg:text-lg">
            &quot;Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan,
            Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis
            Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus,
            Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor
            Neque Lorem Sapien, Suspendisse Aliquam.&quot;
          </span>
          <Image src={user} alt="" className="w-36 md:w-fit mt-5" />
          <span className="mt-5 font-bold tracking-tighter">Nick Jonas</span>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

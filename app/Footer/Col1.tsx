import Logo from "../Logo";
import mail from "../../public/mail.png";
import call from "../../public/call.png";
import Image from "next/image";

const Col1 = () => {
  return (
    <>
      <div className="flex flex-col items-start space-y-4 text-xs sm:text-sm lg:text-base">
        <Logo />
        <span className="flex justify-center space-x-3">
          <Image src={mail} alt="" />
          <span className="tracking-tighter font-medium">Help@Frybix.Com</span>
        </span>
        <span className="flex justify-center space-x-3">
          <Image src={call} alt="" />
          <span className="tracking-tighter font-medium">+1234 456 678 89</span>
        </span>
      </div>
    </>
  );
};

export default Col1;

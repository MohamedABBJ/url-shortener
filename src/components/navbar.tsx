import Image from "next/image";
import LogoScissors from "../../public/logoScissors.svg";
import arrowRight from "../../public/arrowRight.svg";

export const Navbar = () => {
  return (
    <>
      <div className="px-12 py-5 absolute w-full flex justify-between items-center">
        <div className="flex items-center gap-1 ml-4">
          <Image width={25} src={LogoScissors} alt="logoIcon" />
          <h1 className="font-semibold text-xl">Pndek</h1>
        </div>
        <div className="flex">
          <button className="text-sm rounded-full px-4 py-2 bg-white text-black mr-3">
            <p className="text-gray-500 font-medium">Sign in</p>
          </button>
          <button className="flex items-center text-sm rounded-2xl gap-1 bg-black text-white px-4 py-2">
            <p className="font-medium">Try for free</p>
            <Image src={arrowRight} alt="arrowRightIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

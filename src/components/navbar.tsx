import Image from "next/image";
import LogoScissors from "../../public/logoScissors.svg";
import arrowRight from "../../public/arrowRight.svg";

export const Navbar = () => {
  return (
    <>
      <div className="px-12 py-5 absolute w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image className="w-8" src={LogoScissors} alt="logoIcon" />
          <h1 className="font-bold">Pndek</h1>
        </div>
        <div className="flex">
          <button className="text-sm rounded-full px-4 py-2 bg-white text-black mr-3">
            Sign in
          </button>
          <button className="flex items-center text-sm rounded-2xl bg-black text-white px-5 py-2">
            <p>Try for free</p>
            <Image src={arrowRight} alt="arrowRightIcon" />
          </button>
        </div>
      </div>
    </>
  );
};

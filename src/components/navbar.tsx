import Image from "next/image";
import LogoScissors from "../../public/logoScissors.svg";

export const Navbar = () => {
  return (
    <>
      <div className="h-16 absolute w-full flex justify-between items-center">
        <div className="flex items-center ml-6 gap-2">
          <Image className="w-8" src={LogoScissors} alt="logoIcon" />
          <h1>Pndek</h1>
        </div>
        <div className="mr-4">
          <button className="rounded-full px-4 py-2 bg-white text-black mr-4">
            Sign in
          </button>
          <button className="rounded-3xl bg-black text-white px-5 py-2">
            Try for free
          </button>
        </div>
      </div>
    </>
  );
};

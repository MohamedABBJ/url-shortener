import UserLoggedStateProps from "@/interfaces/user-logged-state-props";
import Image from "next/image";
import arrowRight from "../../public/arrowRight.svg";
import Link from "next/link";

export default function UserUnsignedButtons() {
  return (
    <>
      <Link href={"/signin"}>
        <button className="text-sm rounded-full px-4 py-2 bg-white text-black mr-3">
          <p className="text-gray-500 font-medium">Sign in</p>
        </button>
      </Link>

      <Link href={"/signin"}>
        <button className="flex items-center text-sm rounded-2xl gap-1 bg-black text-white px-4 py-2">
          <p className="font-medium">Try for free</p>
          <Image src={arrowRight} alt="arrowRightIcon" />
        </button>
      </Link>
    </>
  );
}

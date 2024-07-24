import Image from "next/image";
import LogoScissors from "../../public/logoScissors.svg";
import { auth } from "../../auth";
import SignInButtons from "./user-unsigned-buttons";
import UserUnsignedButtons from "./user-unsigned-buttons";
import UserSignedInButtons from "./user-signed-in-buttons";

export const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <div className="md:px-12 px-6 py-5 absolute w-full flex justify-between items-center">
        <div className="flex items-center gap-1 ml-4">
          <Image width={25} src={LogoScissors} alt="logoIcon" />
          <h1 className="font-semibold text-xl">Pndek</h1>
        </div>
        <div className="flex items-center gap-3">
          {session ? (
            <UserSignedInButtons userEmail={session.user?.email as string} />
          ) : (
            <UserUnsignedButtons />
          )}
        </div>
      </div>
    </>
  );
};

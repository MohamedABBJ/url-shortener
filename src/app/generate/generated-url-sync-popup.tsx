import Image from "next/image";
import LogoScissors from "../../../public/logoScissors.svg";

export default function GeneratedUrlSyncPopUp() {
  return (
    <>
      <div className="absolute h-lvh w-full opacity-80 bg-black" />
      <div className="h-lvh w-full flex justify-center items-center">
        <div className="bg-white rounded-lg  z-10 flex flex-col items-center pt-14 pb-6 px-6 gap-6">
          <Image width={48} src={LogoScissors} alt="ScissorsPopUpLogo" />
          <div className="text-center">
            <h1 className="text-gray-500">
              Welcome to <strong>Pndek.xyz</strong>
            </h1>
            <p className="text-xs text-gray-500">
              To show histories generate urls please click button bellow.
            </p>
          </div>
          <button className="text-sm font-semibold bg-black text-white rounded-md mt-6 w-full h-10">
            Sync Urls
          </button>
        </div>
      </div>
    </>
  );
}

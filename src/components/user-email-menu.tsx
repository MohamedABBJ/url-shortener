import Image from "next/image";
import Link from "next/link";
import ArrowLink from "../../public/arrowLink.svg";

export default function UserEmailMenu(props: { userEmail: string }) {
  return (
    <div className="rounded-md absolute top-16 right-16 w-64 box-border bg-white z-20 shadow-md [&_p]:my-[0.80rem] [&_p]:mx-4">
      <p className="text-sm font-bold">{props.userEmail}</p>
      <div className="border-[1px] border-gray-50 w-full my-1" />
      <p className="text-xs text-gray-400">
        Page design inspired by{" "}
        <Link href={"https://layers.to/dinivannendra"} className="underline">
          dinivan nendra
        </Link>{" "}
        for saving your shorten url
      </p>
      <div className="w-full flex p-1 justify-center">
        <Link href={"/generate"} className="w-full">
          <button className="rounded-md flex w-full h-8 items-center hover:bg-gray-100 hover:transition-colors duration-300">
            <Image
              className="ml-4"
              width={15}
              src={ArrowLink}
              alt="arrowLinkIcon"
            />
            <p className="text-sm">Generate Urls</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

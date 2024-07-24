"use client";

import emailMenuStore from "@/store/email-menu-store";
import Image from "next/image";
import Link from "next/link";
import ArrowLink from "../../public/arrowLink.svg";

export default function UserEmail(props: { userEmail: string }) {
  const { showMenu, setShowMenu } = emailMenuStore();
  return (
    <>
      <button className="text-xs w-28 truncate text-gray-500 hover:underline">
        {props.userEmail}
      </button>
      <div className="rounded-md absolute top-16 right-16 w-64 box-border bg-white shadow-md [&_p]:my-[0.60rem] [&_p]:mx-4">
        <p className="text-sm font-bold">{props.userEmail}</p>
        <div className="border-[1px] border-gray-50 w-full my-1" />
        <p className="text-xs text-gray-400">
          Created by{" "}
          <Link href={"www.google.com"} className="underline">
            dinivan nendra
          </Link>{" "}
          for saving your shorten url
        </p>
        <div className="w-full flex p-2 justify-center">
          <button className="rounded-md flex w-full items-center hover:bg-gray-500">
            <Image
              className="ml-4"
              width={15}
              src={ArrowLink}
              alt="arrowLinkIcon"
            />
            <p className="text-sm">Generate Urls</p>
          </button>
        </div>
      </div>
    </>
  );
}

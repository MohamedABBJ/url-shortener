"use client";

import emailMenuStore from "@/store/email-menu-store";
import UserEmailMenu from "./user-email-menu";

export default function UserEmail(props: { userEmail: string }) {
  const { showMenu, setShowMenu, setOuterWindowHanlder } = emailMenuStore();
  return (
    <>
      <button
        onClick={() => {
          setOuterWindowHanlder("block");
          setShowMenu(true);
        }}
        className="text-xs w-28 h-9 text-gray-500 hover:underline"
      >
        <div className="flex justify-end">
          <div className="w-3 h-3 rounded-full bg-red-400 animate-ping" />
          <div className="w-3 h-3 rounded-full bg-red-400 absolute" />
        </div>
        <p className="truncate">{props.userEmail}</p>
      </button>
      {showMenu ? <UserEmailMenu userEmail={props.userEmail} /> : null}
    </>
  );
}

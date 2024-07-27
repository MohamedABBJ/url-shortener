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
        className="text-xs w-28 h-9 truncate text-gray-500 hover:underline relative"
      >
        <div className="top-0 w-3 h-3 rounded-full bg-red-600 absolute right-0" />
        ;{props.userEmail}
      </button>
      {showMenu ? <UserEmailMenu userEmail={props.userEmail} /> : null}
    </>
  );
}

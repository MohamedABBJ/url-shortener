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
        className="text-xs w-28 truncate text-gray-500 hover:underline"
      >
        {props.userEmail}
      </button>
      {showMenu ? <UserEmailMenu userEmail={props.userEmail} /> : null}
    </>
  );
}

"use client";

import emailMenuStore from "@/store/email-menu-store";

export default function OuterContentWindow() {
  const { outerWindowHandler, setOuterWindowHanlder, setShowMenu } =
    emailMenuStore();

  return (
    <div
      className={`absolute h-lvh w-full bg-transparent z-10 ${outerWindowHandler}`}
      onClick={() => {
        setShowMenu(false);
        setOuterWindowHanlder("hidden");
      }}
    />
  );
}

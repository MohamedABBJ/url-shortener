"use client";

import emailMenuStore from "@/store/email-menu-store";

export default function OuterContentWindow() {
  const { outerWindowHandler, setOuterWindowHanlder } = emailMenuStore();

  return (
    <div
      className={`absolute h-lvh w-full bg-transparent z-10 ${outerWindowHandler}`}
      onClick={() => setOuterWindowHanlder("hidden")}
    />
  );
}

"use client";

import Image from "next/image";
import ScissorsIcon from "../../../public/logoScissors.svg";
import { signIn } from "next-auth/react";
import SignInButtons from "./sign-in-buttons";

export default function SignIn() {
  const signInOptions = [
    {
      optionName: "Github",
      id: 1,
    },
    {
      optionName: "Gitlab",
      id: 2,
    },
    {
      optionName: "Google",
      id: 3,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-lvh outline [&_div]:flex [&_div]:flex-col">
      <div className="outline flex-col flex items-center p-11 rounded-lg">
        <Image width={50} src={ScissorsIcon} alt="scissorsIcon" />
        <p>Welcome to pndek.xyz</p>
        <p>Start creating short links with Supercharge</p>
        <div>
          {signInOptions.map((element) => (
            <SignInButtons
              {...{ optionName: element.optionName, id: element.id }}
              key={element.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

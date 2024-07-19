"use client";

import Image from "next/image";
import ScissorsIcon from "../../../public/logoScissors.svg";

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
      <div className="outline flex-col flex items-center py-36 px-52 rounded-lg">
        <Image width={17} src={ScissorsIcon} alt="scissorsIcon" />
        <p>Welcome to pndek.xyz</p>
        <p>Start creating short links with Supercharge</p>
        <div>
          {signInOptions.map((element) => (
            <button
              key={element.id}
            >{`Sign in with ${element.optionName}`}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

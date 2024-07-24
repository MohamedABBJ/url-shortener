import Image from "next/image";
import ScissorsIcon from "../../../public/logoScissors.svg";
import { signIn } from "next-auth/react";
import SignInButtons from "./sign-in-buttons";
import { useSearchParams } from "next/navigation";
import GithubIcon from "../../../public/githubIcon.webp";
import GitlabIcon from "../../../public/gitlabIcon.webp";
import GoogleIcon from "../../../public/googleIcon.webp";

export default function SignIn() {
  const signInOptions = [
    {
      optionName: "Github",
      id: 1,
      icon: GithubIcon,
    },
    {
      optionName: "Gitlab",
      id: 2,
      icon: GitlabIcon,
    },
    {
      optionName: "Google",
      id: 3,
      icon: GoogleIcon,
    },
  ];

  return (
    <div className="animate-changing-colors flex items-center justify-center w-full h-lvh outline [&_div]:flex [&_div]:flex-col">
      <div className="bg-white flex-col flex items-center p-11 rounded-xl drop-shadow-lg">
        <Image
          className="mt-5"
          width={50}
          src={ScissorsIcon}
          alt="scissorsIcon"
        />
        <p className="font-bold text-lg">Welcome to pndek.xyz</p>
        <p className="text-xs text-gray-500">
          Start creating short links with Supercharge
        </p>
        <div className="mt-10">
          {signInOptions.map((element) => (
            <SignInButtons
              {...{
                optionName: element.optionName,
                icon: element.icon,
                id: element.id,
              }}
              key={element.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

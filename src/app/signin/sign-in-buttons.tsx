import SignInButtonProps from "@/interfaces/sign-in-button-props";
import githubSignIn from "@/utils/github-sign-in";
import googleSignIn from "@/utils/google-sign-in";
import Image from "next/image";

const SignInButtons = (props: SignInButtonProps) => {
  return (
    <button
      onClick={async () => {
        const request = window.open(await googleSignIn({ mode: "userLogin" }));
        console.log(request);
      }}
      className=" border border-gray-300 rounded-lg flex py-3 px-36 gap-2 items-center  mt-1 text-gray-500 text-sm hover:bg-gray-200 transition-colors duration-100"
      key={props.id}
    >
      <Image width={18} src={props.icon} alt={`${props.optionName}Icon`} />
      {`Sign in with ${props.optionName}`}
    </button>
  );
};

export default SignInButtons;

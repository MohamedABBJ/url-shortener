import SignInButtonProps from "@/interfaces/sign-in-button-props";
import Image from "next/image";
import { signIn } from "../../../auth";

const SignInButtons = (props: SignInButtonProps) => {
  const signInOptionInLowerCase =
    props.optionName.charAt(0).toLowerCase() + props.optionName.slice(1);

  return (
    <form
      action={async () => {
        "use server";
        await signIn(signInOptionInLowerCase, { redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className=" border border-gray-300 rounded-lg flex justify-center py-[0.6rem] md:w-[28rem] w-64 gap-2 items-center box-border mt-1 text-gray-500 text-sm hover:bg-gray-200 transition-colors duration-100"
        key={props.id}
      >
        <Image width={18} src={props.icon} alt={`${props.optionName}Icon`} />
        {`Sign in with ${props.optionName}`}
      </button>
    </form>
  );
};

export default SignInButtons;

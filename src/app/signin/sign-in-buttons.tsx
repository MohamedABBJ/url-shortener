import SignInButtonProps from "@/interfaces/sign-in-button-props";
import githubSignIn from "@/utils/github-sign-in";
import { signIn } from "next-auth/react";

const SignInButtons = (props: SignInButtonProps) => {
  return (
    <form action={githubSignIn}>
      <button
        type="submit"
        className="border border-black px-40 mt-1 text-gray-600 text-sm"
        key={props.id}
      >{`Sign in with ${props.optionName}`}</button>
    </form>
  );
};

export default SignInButtons;

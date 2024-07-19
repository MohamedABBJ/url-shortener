import SignInButtonProps from "@/interfaces/sign-in-button-props";
import githubSignIn from "@/utils/github-sign-in";
import googleSignIn from "@/utils/google-sign-in";

const SignInButtons = (props: SignInButtonProps) => {
  return (
    <button
      onClick={async () => {
        const request = window.open(await googleSignIn());
        console.log(request);
      }}
      className="border border-black px-40 mt-1 text-gray-600 text-sm"
      key={props.id}
    >{`Sign in with ${props.optionName}`}</button>
  );
};

export default SignInButtons;

import { signOut } from "../../auth";
import UserEmail from "./user-email";

export default async function UserSignedInButtons(props: {
  userEmail: string;
}) {
  return (
    <>
      <UserEmail userEmail={props.userEmail} />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          type="submit"
          className="bg-white text-xs text-gray-500 border-gray-300 border-[1px] py-2 px-4 rounded-xl"
        >
          Logout
        </button>
      </form>
    </>
  );
}

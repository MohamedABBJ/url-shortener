import { signOut } from "../../auth";

export default function UserSignedInButtons(props: { userEmail: string }) {
  return (
    <>
      <p className="text-xs w-28 truncate text-gray-500">{props.userEmail}</p>
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
          logout
        </button>
      </form>
    </>
  );
}

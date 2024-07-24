import { auth } from "../../auth";

export default async function UserEmail() {
  const session = await auth();

  if (!session) {
    return null;
  }
  return <p>{session?.user?.email}</p>;
}

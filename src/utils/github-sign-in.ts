"use server";
import { signIn } from "next-auth/react";

const githubSignIn = async () => {
  await signIn("github");
};

export default githubSignIn;

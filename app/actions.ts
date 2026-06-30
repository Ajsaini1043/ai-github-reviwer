"use server";

import { signIn, signOut } from "../auth";

export async function loginWithGithub() {
  console.log("GitHub login clicked");

  await signIn("github", {
    redirectTo: "/",
  });
}

export async function logout() {
  await signOut({
    redirectTo: "/",
  });
}
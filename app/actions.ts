"use server";

import { signIn } from "../auth";

export async function loginWithGithub() {
  console.log("GitHub login clicked");
  await signIn("github", {
    redirectTo: "/",
  });
}

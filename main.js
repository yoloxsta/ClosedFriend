import { UserManager } from "https://cdn.skypack.dev/oidc-client-ts";
import { signOutRedirect, config } from "./config.js";

export const userManager = new UserManager({
  ...config,
});

document.getElementById("signIn").addEventListener("click", async () => {
  await userManager.signinRedirect();
});

document.getElementById("signOut").addEventListener("click", async () => {
  await signOutRedirect();
});

userManager.signinCallback().then(function (user) {
  document.getElementById("email").textContent = user.profile?.email;
  document.getElementById("access-token").textContent = user.access_token;
  document.getElementById("id-token").textContent = user.id_token;
  document.getElementById("refresh-token").textContent = user.refresh_token;
});

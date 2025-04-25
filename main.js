// main.js
import { UserManager } from "oidc-client-ts";
import { ENV } from "./env.js";

const cognitoAuthConfig = {
    authority: ENV.AUTHORITY,
    client_id: ENV.CLIENT_ID,
    redirect_uri: ENV.REDIRECT_URI,
    response_type: "code",
    scope: "phone openid email"
};

export const userManager = new UserManager({ ...cognitoAuthConfig });

export async function signOutRedirect () {
    window.location.href =
        `${ENV.COGNITO_DOMAIN}/logout?client_id=${ENV.CLIENT_ID}&logout_uri=${encodeURIComponent(ENV.LOGOUT_URI)}`;
}

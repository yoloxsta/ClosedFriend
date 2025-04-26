# ClosedFriend

## To test this, create user pool in AWS Cognito and create config.js and write .env variables using your credentials

// config.js
export const config = {
    COGNITO_DOMAIN: "your-cognito-domain",
    CLIENT_ID: "ur-client-id",
    REDIRECT_URI: "redirect",
    LOGOUT_URI: "logout-uri",
    AUTHORITY: "ARN",
};

export function signOutRedirect () {
    const clientId = config.client_id;
    const logoutUri = config.redirect_uri;
    const cognitoDomain = "cognito domain";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

---
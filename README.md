# ClosedFriend

## To test this, create user pool in AWS Cognito and create config.js and write .env variables using your credentials

// config.js
export const ENV = {
    COGNITO_DOMAIN: "your-cognito-domain",
    CLIENT_ID: "ur-client-id",
    REDIRECT_URI: "redirect",
    LOGOUT_URI: "logout-uri",
    AUTHORITY: "ARN",
};


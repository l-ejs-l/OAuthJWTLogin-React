export const APP_DOMAIN = "http://localhost:3000/";
export const SERVER_DOMAIN = "http://localhost:8080/";
export const OAUTH2_LOGIN_URL = "oauth2/authorization/";
export const REDIRECT_URI = `social-login-success`;
export const REDIRECT_PARAM = `redirect_uri`;
export const EXPECTED_TOKEN = `token`;
export const TOKEN_PREFIX = "Bearer ";
export const USER_PROFILE = `api/user`;
export const REDIRECT = `?${REDIRECT_PARAM}=${APP_DOMAIN}${REDIRECT_URI}?${EXPECTED_TOKEN}=`;

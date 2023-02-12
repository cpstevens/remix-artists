import { redirect } from "@remix-run/node";
import { randomBytes } from "node:crypto";
import qs from "qs";

type SpotifyAuth_GrantType = "authorization_code" | "refresh_token";

type SpotifyAuth_AccessTokenRequest = {
  grant_type: SpotifyAuth_GrantType;
  code: string;
  redirect_uri: string;
};

type SpotifyAuth_RefreshTokenRequest = {
  grant_type: SpotifyAuth_GrantType;
  refresh_token: string;
};

type SpotifyAuth_AccessTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: string;
  refresh_token: string;
};

type SpotifyAuth_AccessTokenParameters = {
  error: string | null;
  state: string | null;
  code: string | null;
};

type SpotifyAuth_UserAuthorizationRequest = {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  state: string;
  scope: string;
  show_dialog: boolean;
};

export const requestUserAuthorization = () => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_STATE_TOKEN } = process.env;
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_STATE_TOKEN) {
    throw new Error("ERROR - Spotify Client ID and State Token Not Found");
  }

  const scopes = "user-follow-read";
  const redirectUri = "http://localhost:3000/postlogin";

  console.log(`baseState on inital send ${SPOTIFY_STATE_TOKEN}`);

  const params: SpotifyAuth_UserAuthorizationRequest = {
    response_type: "code",
    client_id: SPOTIFY_CLIENT_ID,
    state: SPOTIFY_STATE_TOKEN,
    redirect_uri: redirectUri,
    scope: scopes,
    show_dialog: false,
  };

  return redirect(
    `https://accounts.spotify.com/authorize?${qs.stringify(params)}`
  );
};

export const getAccessToken = async ({
  error,
  code,
  state,
}: SpotifyAuth_AccessTokenParameters): Promise<SpotifyAuth_AccessTokenResponse> => {
  if (error) {
    throw new Error(error);
  }
  const { SPOTIFY_STATE_TOKEN } = process.env;
  console.log(`baseState on callback ${SPOTIFY_STATE_TOKEN}`);
  console.log(`state on callback ${state}`);

  if (state !== SPOTIFY_STATE_TOKEN) {
    throw new Error("state mismatch");
  }

  if (!code) {
    throw new Error("code not set");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: `code=${code}&redirect_uri=${encodeURI(
      "http://localhost:3000/postlogin"
    )}&grant_type=authorization_code`,
    headers: {
      Authorization: buildAuthorizationHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await response.json();
  console.log(data);

  return data;
};

export const refreshAccessToken = async (
  refresh_token: string
): Promise<SpotifyAuth_AccessTokenResponse> => {
  const requestBody: SpotifyAuth_RefreshTokenRequest = {
    refresh_token,
    grant_type: "refresh_token",
  };

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      Authorization: buildAuthorizationHeader(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.json();
};

const buildAuthorizationHeader = (): string => {
  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = process.env;

  return `Basic ${new Buffer(
    `${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
  ).toString("base64")}`;
};

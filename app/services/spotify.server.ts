import { Session } from "@remix-run/node";

const buildAuthorizationHeader = (session: Session) => {
  return `${session.get("token_type")} ${session.get("access_token")}`;
};

export type Spotify_ArtistInfo = {
  externalUrls: { spotify: string };
  followers: { total: number };
  genres: string[];
  href: string;
  id: string;
  images: { url: string; height: number; width: number }[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export type Spotify_FollowedArtistsData = {
  href: string;
  limit: number;
  next: string;
  cursors: { after: string; before: string };
  total: number;
  items: Spotify_ArtistInfo[];
};

export type Homepage_ArtistInfo = Pick<Spotify_ArtistInfo, "name" | "images" | "id">;

export const getUsersFollowedArtists = async (
  session: Session
): Promise<Spotify_FollowedArtistsData> => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/following?type=artist",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': buildAuthorizationHeader(session),
      },
    }
  );

  const data = await response.json();
  return data.artists;
};

export const searchForArtist = async (artistName: string, session: Session): Promise<Spotify_ArtistInfo[]> => {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=artist`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': buildAuthorizationHeader(session)
        }
    });

    const data = await response.json();
    return data.artists.items;
}

export const getArtistInformation = async (artistId: string, session: Session): Promise<Spotify_ArtistInfo> => {
  const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': buildAuthorizationHeader(session)
    }
  });

  const data = await response.json();

  return data;
};

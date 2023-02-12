import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/auth/sessions.server";
import { ArtistGrid } from "~/components/ArtistList";
import { getUsersFollowedArtists, Homepage_ArtistInfo } from "~/services/spotify.server";
import { pageContainerStyles } from "~/styles/pageContainer.css";

type LoaderData = {
  isUserAuthenticated: boolean;
  followedArtists: Homepage_ArtistInfo[];
}

export const loader = async ({request}: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("access_token")) {
    return json<LoaderData>({
      isUserAuthenticated: false,
      followedArtists: [],
    });
  }

  const data = await getUsersFollowedArtists(session);

  return json<LoaderData>({
    isUserAuthenticated: true,
    followedArtists: data.items.map(({ name, id, images }) => ({
      name,
      id,
      images,
    })),
  });
}

export default function Index() {
  const { isUserAuthenticated, followedArtists } =
    useLoaderData<typeof loader>();
    
  return (
    <div className={pageContainerStyles}>
      <h1>Welcome to Remix-Artists</h1>
      <p>
        Powered by Spotify, Remix-Artists aims to serve you content about your
        favorite artists! See what songs by your favorite artists you're really
        vibing with, what they're up to, and when they'll be performing near
        you!
      </p>
      <h2>Your Followed Artists ({followedArtists.length})</h2>
      {isUserAuthenticated ? (
        <ArtistGrid artists={followedArtists} />
      ) : (
        <p>Login to view followed artists</p>
      )}
    </div>
  );
}

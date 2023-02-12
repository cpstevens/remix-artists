import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/auth/sessions.server";
import { ArtistGrid } from "~/components/ArtistList";
import {
  getUsersFollowedArtists,
  Homepage_ArtistInfo,
} from "~/services/spotify.server";
import { pageContainerStyles } from "~/styles/pageContainer.css";

type LoaderData = {
  isUserAuthenticated: boolean;
  followedArtists: Homepage_ArtistInfo[];
};

export const loader = async ({ request }: LoaderArgs) => {
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
};

export default function ArtistsLayoutPage() {
  const { isUserAuthenticated, followedArtists } =
    useLoaderData<typeof loader>();

  return (
    <main className={pageContainerStyles}>
      <h1>Artists</h1>
      <p>
        This is the hub for all things artist related, showing your followed
        artists as well as a way to discover new ones!
      </p>
      <h2>Your Followed Artists ({followedArtists.length})</h2>
      {isUserAuthenticated ? (
        <ArtistGrid artists={followedArtists} />
      ) : (
        <p>Login to view followed artists</p>
      )}
    </main>
  );
}

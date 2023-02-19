import { LoaderArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { commitSession, getSession, isUserLoggedIn } from "~/auth/sessions.server";
import { ArtistGrid } from "~/components/ArtistList";
import {
  getUsersFollowedArtists,
  Homepage_ArtistInfo,
} from "~/services/spotify.server";
import { homepageFollowedArtistListStyles, homepageFollowedArtistsStyles } from "~/styles/pages/homepage.css";
import { pageContainerStyles } from "~/styles/shared/pageContainer.css";

type LoaderData = {
  isUserAuthenticated: boolean;
  followedArtists: Homepage_ArtistInfo[];
};

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!isUserLoggedIn(session)) {
    return json<LoaderData>({
      isUserAuthenticated: false,
      followedArtists: [],
    });
  }

  const data = await getUsersFollowedArtists(session);

  return json<LoaderData>({
    isUserAuthenticated: true,
    followedArtists: data.items.map(
      ({ name, id, images }) => ({
        name,
        id,
        images,
      }),
      {
        headers: {
          "Set-Cookie": await commitSession(session),
        },
      }
    ),
  });
};

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
      <div className={homepageFollowedArtistsStyles}>
      <h2>Your Followed Artists { isUserAuthenticated && <span>({followedArtists.length})</span> }</h2>
      <div className={homepageFollowedArtistListStyles}>
      {isUserAuthenticated ? (
        <ArtistGrid artists={followedArtists} />
      ) : (
        <p>Login to view followed artists</p>
      )}
      </div>
      </div>
    </div>
  );
}

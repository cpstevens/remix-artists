import { LoaderArgs, json, redirect, MetaFunction } from "@remix-run/node";
import {
  CatchBoundaryComponent,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import {
  commitSession,
  getSession,
  isUserLoggedIn,
} from "~/auth/sessions.server";
import { ArtistGrid } from "~/components/ArtistList";
import {
  Homepage_ArtistInfo,
  searchForArtist,
} from "~/services/spotify.server";

type LoaderData = {
  artists: Homepage_ArtistInfo[];
  searchTerm: string;
};

export const loader = async ({ request }: LoaderArgs) => {
  const params = new URL(request.url).searchParams;
  const artistName = params.get("artist-name");

  if (!artistName) {
    return redirect("/artists");
  }

  if (artistName.length < 3) {
    throw new Response("Cannot search for artists", {
      status: 400,
      statusText: "Please enter at least 3 characters",
    });
  }

  const session = await getSession(request.headers.get("Cookie"));
  if (!isUserLoggedIn(session)) {
    throw new Response("Cannot search for artists", {
      status: 401,
      statusText: "Please log in to search for artists",
    });
  }

  const artists = await searchForArtist(artistName, session);

  return json<LoaderData>(
    {
      artists,
      searchTerm: artistName,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Artists - Discover',
    description: 'Results for artists you want to discover.'
  }
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const { data, statusText } = useCatch();

  return (
    <>
      <h2>{data}</h2>
      <p>{statusText}</p>
    </>
  );
};

export default function DiscoverArtistRoute() {
  const { artists, searchTerm } = useLoaderData<typeof loader>();

  if (artists.length === 0) {
    return <h2>No artists found</h2>;
  }

  return (
    <>
      <h2>
        {artists.length} results for {searchTerm}
      </h2>
      <ArtistGrid artists={artists} />
    </>
  );
}

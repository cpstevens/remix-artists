import { defer, LoaderArgs, MetaFunction, Response } from "@remix-run/node";
import {
  Await,
  CatchBoundaryComponent,
  useCatch,
  useLoaderData,
} from "@remix-run/react";
import { Suspense } from "react";
import { commitSession, getSession, isUserLoggedIn } from "~/auth/sessions.server";
import { ArtistDetails } from "~/components/ArtistDetails";
import { StoryList } from "~/components/StoryList";
import { getStoriesForArtist, NewsAPI_Story } from "~/services/newsApi.server";
import { getArtistInformation } from "~/services/spotify.server";
import { getShowsThisWeekForArtist } from "~/services/ticketmaster.server";
import {
    artistDetailsSubSectionHeader,
  artistPageContent,
  artistStories,
} from "~/styles/pages/artistPage.css";

type LoaderData = {
  name: string;
  imageSrc: string;
  genres: string[];
  popularity: number;
  spotifyUri: string;
  stories: Promise<NewsAPI_Story[]>;
};

export const loader = async ({ request, params }: LoaderArgs) => {
  const { artistId } = params;

  if (!artistId) {
    throw new Response("Artist ID not defined", {
      status: 400,
    });
  }

  const session = await getSession(request.headers.get("Cookie"));

  if (!isUserLoggedIn(session)) {
    throw new Response("Cannot show artist information", {
      status: 401,
      statusText: "Please log in to view artist information",
    });
  }

  const { name, images, genres, popularity, uri } = await getArtistInformation(
    artistId,
    session
  );

  getShowsThisWeekForArtist(name);

  return defer<LoaderData>({
    name: name,
    imageSrc: images[0] ? images[0].url : "/not-found.jpg",
    genres,
    popularity,
    spotifyUri: uri,
    stories: getStoriesForArtist(name),
  }, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return {
    title: `Remix Artists - ${data.name}`,
    description: `Details, stories, and upcoming dates for ${data.name}`,
    'og:title': `Remix Artists - ${data.name}`,
    'og:description': `Details, stories, and upcoming dates for ${data.name}`,
    'og:image': `${data.imageSrc}`
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

export default function ArtistDetailsPage() {
  const { stories, name, imageSrc, genres, popularity, spotifyUri } =
    useLoaderData<typeof loader>();

  return (
      <div className={artistPageContent}>
        <ArtistDetails
          name={name}
          imageSrc={imageSrc}
          genres={genres}
          popularity={popularity}
          spotifyUri={spotifyUri}
        />
        <div className={artistStories}>
          <h3 className={artistDetailsSubSectionHeader}>Top Stories</h3>
          <Suspense fallback={<p>Loading stories...</p>}>
            <Await
              resolve={stories}
              errorElement={<p>Error loading stories.....</p>}
            >
              {(storyData) => <StoryList stories={storyData} />}
            </Await>
          </Suspense>
        </div>
      </div>
  );
}

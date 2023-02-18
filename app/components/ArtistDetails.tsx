import { Link } from "@remix-run/react";

import {
  artistDetailsContainerStyles,
  artistDetailsContentStyles,
} from "~/styles/components/artistDetails.css";

type ArtistDetailsProps = {
  name: string;
  imageSrc: string;
  popularity: number;
  genres: string[];
  spotifyUri: string;
};

export const ArtistDetails: React.FC<ArtistDetailsProps> = ({
  name,
  imageSrc,
  popularity,
  genres,
  spotifyUri,
}) => {
  return (
    <div className={artistDetailsContainerStyles}>
      <Link to={spotifyUri} target="_blank">
        <img
          width={100}
          src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png"
        />
      </Link>
      <div className={artistDetailsContentStyles}>
        <img src={imageSrc} height={250} width={250} alt={`Image of ${name}`} />
        <div className="">
          <h2>{name}</h2>
          <p>Genres - {genres.join(', ')}</p>
          <p>Popularity - {popularity}/100</p>
        </div>
      </div>
    </div>
  );
};

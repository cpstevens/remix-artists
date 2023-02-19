import { Link } from "@remix-run/react";

import {
  artistDetailsContainerStyles,
  artistDetailsContentStyles,
  artistDetailsStatsStyles,
  artistDetailsInformationStyles,
  genreBadgeStyles,
  genreListStyles,
} from "~/styles/components/artistDetails.css";

type ArtistDetailsProps = {
  name: string;
  imageSrc: string;
  popularity: number;
  genres: string[];
  spotifyUri: string;
};

interface GenreBadgeProps {
  name: string;
}

const GenreBadge: React.FC<GenreBadgeProps> = ({ name }) => {
  return <div className={genreBadgeStyles}>{name}</div>;
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
      <a href={spotifyUri} target="_blank">
        <img
          width={100}
          src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Black.png"
        />
      </a>
      <div className={artistDetailsContentStyles}>
        <img src={imageSrc} height={250} width={250} alt={`Image of ${name}`} />
        <div className={artistDetailsInformationStyles}>
          <h2>{name}</h2>
          <div className={artistDetailsStatsStyles}>
            <div>
              <h3>Genres</h3>
              <ul className={genreListStyles}>
                {genres.map((name, index) => (
                  <li key={`genre-${index}`}>
                    <GenreBadge name={name} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Popularity</h3>
              <p>{popularity}/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

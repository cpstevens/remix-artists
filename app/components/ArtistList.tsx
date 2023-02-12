import { Homepage_ArtistInfo } from "~/services/spotify.server";
import {
    artistListEntryContainer,
  artistListEntryContent,
  artistListRootStyle,
  artistNameStyles,
} from "~/styles/artistList.css";

type ArtistListProps = {
  artists: Homepage_ArtistInfo[];
};

export const ArtistGrid: React.FC<ArtistListProps> = ({ artists }) => {
  return (
    <ul className={artistListRootStyle}>
      {artists.map(({ name, id, images }) => (
        <li className={artistListEntryContainer}>
          <div className={artistListEntryContent}>
            <img
              width={100}
              src="/spotify-icons-logos/logos/01_RGB/02_PNG/Spotify_Logo_RGB_Green.png"
            />

            <img
              src={images[0].url}
              alt={`Image of ${name}`}
              height={images[0].height / 2}
              width={images[0].width / 2}
            />
            <p className={artistNameStyles}>{name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
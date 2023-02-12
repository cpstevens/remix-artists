import { pageContainerStyles } from "~/styles/pageContainer.css";

export default function Index() {
  return (
    <div className={pageContainerStyles}>
      <h1>Welcome to Remix-Artists</h1>
      <p>
        Powered by Spotify, Remix-Artists aims to serve you content about your
        favorite artists! See what songs by your favorite artists you're really
        vibing with, what they're up to, and when they'll be performing near
        you!
      </p>
    </div>
  );
}

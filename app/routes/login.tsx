import { LoaderFunction } from "@remix-run/node";

import { pageContainerStyles } from "~/styles/shared/pageContainer.css";
import { requestUserAuthorization } from "~/auth/spotifyAuth.server";

export const loader: LoaderFunction = () => {
  return requestUserAuthorization();
};

export default function LoginPage() {
  return (
    <main className={pageContainerStyles}>
      <h1>Login goes here</h1>
    </main>
  );
}

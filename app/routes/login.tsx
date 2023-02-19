import { LoaderFunction } from "@remix-run/node";

import { pageContainerStyles } from "~/styles/shared/pageContainer.css";
import { requestUserAuthorization } from "~/auth/spotifyAuth.server";

export const loader: LoaderFunction = () => {
  return requestUserAuthorization();
};
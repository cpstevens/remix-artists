import { Form, Outlet } from "@remix-run/react";
import { buttonStyles, buttonTextStyles } from "~/styles/components/button.css";
import {
  discoverInputContainerStyles,
  discoverInputLabelStyles,
  discoverInputStyles,
} from "~/styles/pages/discover.css";
import { pageContainerStyles } from "~/styles/shared/pageContainer.css";

export default function ArtistsLayoutPage() {
  return (
    <main className={pageContainerStyles}>
      <h1>Artists</h1>
      <p>
        This is the hub for all things artist related, showing your followed
        artists as well as a way to discover new ones!
      </p>
      <div>
        <Form
          className={discoverInputContainerStyles}
          method="get"
          action="/artists/discover"
        >
          <label className={discoverInputLabelStyles} htmlFor="artist-name">
            Artist Name
          </label>
          <div>
            <input
              className={discoverInputStyles}
              id="artist-name"
              name="artist-name"
              type="text"
              placeholder="Enter an Artist's Name"
            />
            <button type="submit" className={buttonStyles.linkButton}>
              <span className={buttonTextStyles}>Search</span>
            </button>
          </div>
        </Form>
      </div>
      <Outlet />
    </main>
  );
}

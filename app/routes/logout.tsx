import { ActionFunction, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";

import { getSession, destroySession } from "~/auth/sessions.server";
import { buttonStyles, buttonTextStyles } from "~/styles/button.css";
import { pageContainerStyles } from "~/styles/pageContainer.css";

export const action: ActionFunction = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/artists", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};

export default function LogoutRoute() {
  return (
    <main className={pageContainerStyles}>
      <h1>Are You Sure You Want To Sign Out?</h1>
      <Link to="/artists">
        <button className={buttonStyles.linkButton}>
          {" "}
          <span className={buttonTextStyles}>No</span>
        </button>
      </Link>
      <Form method="post">
        <button type="submit" className={buttonStyles.linkButton}>
          <span className={buttonTextStyles}>Yes</span>
        </button>
      </Form>
    </main>
  );
}

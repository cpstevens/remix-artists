import {
  json,
  LoaderArgs,
  LoaderFunction,
  redirect,
  Response,
} from "@remix-run/node";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import { commitSession, getSession } from "~/auth/sessions.server";
import { getAccessToken } from "~/auth/spotifyAuth.server";
import { buttonStyles, buttonTextStyles } from "~/styles/components/button.css";

export const loader = async ({ request }: LoaderArgs) => {
  const session = await getSession(request.headers.get("Cookie"));
  const params = new URL(request.url).searchParams;
  try {
    const { access_token, expires_in, scope, token_type } =
      await getAccessToken({
        code: params.get('code'),
        error: params.get('error'),
        state: params.get('state'),
      });

    console.log(access_token);
    session.set("access_token", access_token);
    session.set("maxAge", expires_in);
    session.set("scope", scope);
    session.set("token_type", token_type);

    return redirect("/", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  } catch (error) {
    console.error((error as Error).message);
    throw new Response("Spotify Authentication Failed", {
      status: 500,
    });
  }
};

export const CatchBoundary = () => {
  const { data } = useCatch();

  return (
    <main>
      <h1>Auth request failed!</h1>
      <p>{data}</p>
      <button className={buttonStyles.linkButton}>
        <Link className={buttonTextStyles} to="/login">
          Login With Spotify
        </Link>
      </button>
    </main>
  );
};

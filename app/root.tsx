import { cssBundleHref } from "@remix-run/css-bundle";
import { ErrorBoundaryComponent, json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import {
  Outlet, useCatch, useLoaderData,
} from "@remix-run/react";
import { CatchBoundaryComponent } from "@remix-run/react";
import { getSession, isUserLoggedIn } from "./auth/sessions.server";
import { Document } from "./components/Document";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Remix-Artists",
  description: "Music artist site using Remix",
  viewport: "width=device-width,initial-scale=1",
});

type LoaderData = {
  isUserLoggedIn: boolean
}

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export const loader = async ({request}: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  return json<LoaderData>({
    isUserLoggedIn: isUserLoggedIn(session),
  })
}

export default function App() {
  const { isUserLoggedIn } = useLoaderData<typeof loader>();
  return (
    <Document isUserLoggedIn={isUserLoggedIn}>
      <Outlet />
    </Document>
  );
}

export const CatchBoundary: CatchBoundaryComponent = () => {
  const { data, statusText} = useCatch();

  return <Document isUserLoggedIn={false}>
    <h1>Error Caught</h1>
    <h2>{data}</h2>
    <h3>{statusText}</h3>
  </Document>
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <Document isUserLoggedIn={false}>
    <h1>Something went wrong</h1>
    <p>{error.message}</p>
  </Document>
}

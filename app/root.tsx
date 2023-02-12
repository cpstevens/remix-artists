import { cssBundleHref } from "@remix-run/css-bundle";
import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import {
  Outlet,
} from "@remix-run/react";
import { ErrorBoundaryComponent } from "@remix-run/react/dist/routeModules";
import { Document } from "./components/Document";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  ];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return <Document>
    <h1>Something went wrong</h1>
    <p>{error.message}</p>
  </Document>
}

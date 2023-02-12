import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { rootStyles } from "~/styles/rootStyles.css";
import { Header } from "./Header";

type DocumentProps = {
  children: React.ReactNode;
  isUserLoggedIn: boolean;
};

export const Document: React.FC<DocumentProps> = ({ children, isUserLoggedIn }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={rootStyles}>
        <Header isLoggedIn={isUserLoggedIn} />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

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
};

export const Document: React.FC<DocumentProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={rootStyles}>
        <Header />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

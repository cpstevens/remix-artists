import { createCookieSessionStorage, Session } from "@remix-run/node";

const isUserLoggedIn = (session: Session) => session.has('access_token');

const { DOMAIN } = process.env;

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      domain: DOMAIN,
      maxAge: 1200,
      sameSite: "strict",
      secure: true,
      isSigned: true
    },
  });

export { getSession, commitSession, destroySession, isUserLoggedIn };

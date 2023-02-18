import React from "react";
import { Link } from "@remix-run/react";
import {
  rootStyle,
  navItemStyle,
  siteLogo,
  navLinksStyle,
} from "~/styles/components/header.css";
import { buttonStyles, buttonTextStyles } from "~/styles/components/button.css";

type HeaderProps = {
  isLoggedIn: boolean;
};

export const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <div className={rootStyle}>
      <div className={navLinksStyle}>
        <Link className={siteLogo} to="/">
          Remix-Artists
        </Link>
        <Link className={navItemStyle} to="/artists">
          Artists
        </Link>
      </div>

      <div>
        <button className={buttonStyles.linkButton}>
          {isLoggedIn ? (
            <Link className={buttonTextStyles} to="/logout">
              Log Out
            </Link>
          ) : (
            <Link className={buttonTextStyles} to="/login">
              Login With Spotify
            </Link>
          )}
        </button>
      </div>
    </div>
  );
};

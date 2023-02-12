import React from "react";
import { Link } from "@remix-run/react";
import { rootStyle, navItemStyle, siteLogo } from "~/styles/header.css";

export const Header: React.FC = () => {
  return (
    <div className={rootStyle}>
      <Link className={siteLogo} to="/">
        Remix-Artists
      </Link>
      <div>
        <Link className={navItemStyle} to="/artists">
          Artists
        </Link>
      </div>
    </div>
  );
};

import React from "react";
import SiteImage from "../SiteImage";
import Link from "next/link";
import constants from "../../../../config/constants";

const { CLIENT_ROUTES } = constants;

const Logo: React.FC = () => {
  return (
    <Link href={CLIENT_ROUTES.home} passHref>
      <a>
        <SiteImage
          src={"/images/logo.png"}
          alt={"Site-Logo"}
          width={120}
          preview={false}
        />
      </a>
    </Link>
  );
};

export default Logo;

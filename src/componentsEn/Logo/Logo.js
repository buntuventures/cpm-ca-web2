import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";
// import LogoIcon from "/images/cpm-ca-logo-v3.svg";

const Logo = () => (
  <div style={{ display: "flex" }}>
    <Link href="/en" className={classes.LogoImage} passHref>
      <Image
        src="/images/cpm-ca-logo-v3.svg"
        alt="CPM Logo"
        width={400}
        height={100}
      />
    </Link>
  </div>
);

export default Logo;

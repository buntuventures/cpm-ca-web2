import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";
// import LogoIcon from "/images/cpm-ca-logov2-fr.png";

const Logo = () => (
  <div style={{ display: "flex" }}>
    <Link href="/" className={classes.LogoImage} passHref>
      <Image
        src="/images/cpm-ca-logov2-fr.png"
        alt="CPM Logo"
        width={400}
        height={100}
      />
    </Link>
  </div>
);

export default Logo;

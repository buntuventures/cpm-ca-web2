"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Logo.module.css";

const Logo = () => (
  <div style={{ display: "flex" }}>
    <Link href="/" className={classes.LogoImage}>
      <Image
        src="/images/cpm-ca-logov2-fr.png"
        width={400}
        height={100}
        alt="CPM Logo"
        style={{ width: "100%", height: "auto" }}
      />
    </Link>
  </div>
);

export default Logo;

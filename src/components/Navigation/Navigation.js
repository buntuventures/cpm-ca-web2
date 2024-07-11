import React from "react";
import classes from "./Navigation.module.css";
import CallToAction from "../CallToAction";
import NavLinks from "./NavLinks";

const Navigation = ({ isMobile }) => (
  <nav className={classes.NavWrap} aria-label="Navigation principale">
    <NavLinks isMobile={isMobile} />
    <CallToAction />
  </nav>
);

export default Navigation;

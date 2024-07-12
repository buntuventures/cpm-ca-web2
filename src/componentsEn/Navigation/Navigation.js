import React from "react";
import classes from "./Navigation.module.css";
import CallToAction from "../CallToAction";
import NavLinks from "./NavLinks";

const Navigation = () => (
  <nav className={classes.NavWrap}>
    <NavLinks />
    <CallToAction />
  </nav>
);

export default Navigation;

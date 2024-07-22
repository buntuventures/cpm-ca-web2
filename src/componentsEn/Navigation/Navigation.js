import React from "react";
import classes from "./Navigation.module.css";
//import CallToAction from "../CallToAction";
import NavLinks from "./NavLinks";
import dynamic from 'next/dynamic';

const DynamicCallToAction = dynamic(() => import('@/componentsEn/CallToAction'), {
  ssr: false,
});

const Navigation = () => (
  <nav className={classes.NavWrap}>
    <NavLinks />
    <DynamicCallToAction />
  </nav>
);

export default Navigation;

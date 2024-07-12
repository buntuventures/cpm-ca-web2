import React from "react";
import classes from "./Hamburger.module.css";

const Hamburger = ({ active, clicked }) => {
  const activeClass = active
    ? `${classes.HamburgerContainer} ${classes.Active}`
    : classes.HamburgerContainer;

  return (
    <button className={activeClass} onClick={clicked} aria-label="Toggle menu">
      <div className={classes.Hamburger} />
    </button>
  );
};

export default Hamburger;

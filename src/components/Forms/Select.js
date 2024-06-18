import React from "react";
import classes from "./Forms.module.css";
import ArrowDown from "/images/arrow_down-24px.svg";

const Select = ({ styles, children, changed, name, value }) => (
  <select
    className={classes.SelectInput}
    style={{ backgroundImage: `url(${ArrowDown})`, ...styles }}
    name={name}
    value={value}
    onChange={changed}
  >
    {children}
  </select>
);

export default Select;

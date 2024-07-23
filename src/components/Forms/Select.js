import React from "react";
import classes from "./Forms.module.css";

const Select = ({ styles, children, changed, name, value }) => (
  <select
    className={classes.SelectInput}
    style={{ backgroundImage: `url("/images/arrow_down-24px.svg")`, ...styles }}
    name={name}
    value={value}
    onChange={changed}
  >
    {children}
  </select>
);

export default Select;

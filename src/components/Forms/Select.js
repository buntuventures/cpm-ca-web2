import React from "react";
import classes from "./Forms.module.css";

const Select = ({ styles, children, changed, name, value }) => (
  <select
    className={classes.SelectInput}
    name={name}
    value={value}
    onChange={changed}
  >
    {children}
  </select>
);

export default Select;

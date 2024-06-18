import React from "react";
import classes from "./Forms.module.css";

const Input = ({
  styles,
  placeholder,
  type,
  name,
  changed,
  value,
  checked,
  blurred,
  onKeyDown,
}) => (
  <input
    className={classes.InputStyle}
    style={styles}
    placeholder={placeholder}
    name={name}
    checked={checked}
    onChange={changed}
    onBlur={blurred}
    value={value}
    onKeyDown={onKeyDown}
    type={type ? type : "text"}
  />
);

export default Input;

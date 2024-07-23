import React from "react";
import PropTypes from "prop-types";
import classes from "./Forms.module.css";

const Select = ({ styles, children, changed, name, value }) => (
  <select
    className={classes.SelectInput}
    style={{
      backgroundImage: `url("/images/arrow_down-24px.svg")`,
      ...styles,
    }}
    name={name}
    value={value}
    onChange={changed}
  >
    {children}
  </select>
);

Select.propTypes = {
  styles: PropTypes.object,
  children: PropTypes.node.isRequired,
  changed: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Select.defaultProps = {
  styles: {},
  value: "",
};

export default Select;

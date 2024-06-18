import React from "react";
import classNames from "classnames";
import classes from "./Button.module.css";

const Button = ({
  color,
  text,
  clicked,
  styles,
  loading,
  disabled = false,
}) => {
  const buttonClasses = classNames(classes.Button, {
    [classes.Primary]: color === "primary" && !loading && !disabled,
    [classes.PrimaryButtonLoading]: color === "primary" && loading,
    [classes.PrimaryButtonDisabled]: color === "primary" && disabled,
    [classes.Secondary]: color === "secondary",
    [classes.Transparent]: color === "transparent",
  });

  return (
    <button
      className={buttonClasses}
      onClick={clicked}
      style={styles}
      disabled={loading || disabled}
    >
      {loading ? "Chargement..." : text}
    </button>
  );
};

export default Button;

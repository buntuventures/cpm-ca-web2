import React from "react";
import classes from "./Button.module.css";

const Button = ({
  color,
  text,
  clicked,
  styles,
  loading,
  disabled = false,
}) => {
  let buttonStyles = [classes.Button];
  if (color === "primary") {
    buttonStyles.push(classes.Primary);
  }

  if (color === "primary" && loading) {
    buttonStyles.push(classes.PrimaryButtonLoading);
  }

  if (color === "primary" && disabled) {
    buttonStyles.push(classes.PrimaryButtonDisabled);
  }

  if (color === "secondary") {
    buttonStyles.push(classes.Secondary);
  }

  if (color === "transparent") {
    buttonStyles.push(classes.Transparent);
  }

  return (
    <button
      className={buttonStyles.join(" ")}
      onClick={clicked}
      style={styles}
      disabled={loading || disabled}
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;

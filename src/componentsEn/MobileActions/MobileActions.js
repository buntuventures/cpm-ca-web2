import React from "react";
import CallAction from "../Header/CallAction";
import FillFormIcon from "../Header/FillFormAction";
import classes from "./MobileActions.module.scss";

const MobileActions = () => {
  return (
    <div className={classes.ActionWrapper}>
      <CallAction />
      <FillFormIcon />
    </div>
  );
};

MobileActions.displayName = "MobileActions";
export default MobileActions;

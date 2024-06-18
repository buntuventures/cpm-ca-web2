import React from "react";
import CallAction from "../Header/CallAction";
import FillFormIcon from "../Header/FillFormAction";

import classes from "./MobileActions.module.css";

const MobileActions = () => {
  return (
    <div className={classes.ActionWrapper}>
      <CallAction />
      <FillFormIcon />
    </div>
  );
};

export default MobileActions;

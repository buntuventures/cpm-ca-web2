import React, { useState } from "react";
import classes from "./ToolTip.module.css";

const ToolTip = ({ children, fontSize, text }) => {
  const [visible, setVisible] = useState(false);

  return (
    <span style={{ display: "inline-block", position: "relative" }}>
      {visible && (
        <span
          className={classes.PopUp}
          style={{ fontSize: fontSize || "0.7rem" }}
        >
          <span className={classes.Tip} />
          {text ||
            "Si vous annulez ou re-schedulez votre premier rendez-vous avec un préavis de moins de 48 heures, ou si vous ne vous présentez pas, vous serez facturé le montant total de la consultation."}
        </span>
      )}
      <span
        style={{ display: "inline-block" }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>
    </span>
  );
};

export default ToolTip;

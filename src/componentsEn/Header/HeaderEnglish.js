import React from "react";
import CallToAction from "../CallToAction";
import countMobileCallConversion from "../../utils/google_conversion_mobile_call";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <div className={classes.HeaderWrapper}>
      <Logo />
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className={classes.CallActionHeader}>
          <div className={classes.CallTitle}>Call to make an appointment</div>
          <Link
            href="tel:+16132525227"
            className={classes.PhoneNumber}
            onClick={() => countMobileCallConversion()}
          >
            <strong>613-252-5227</strong>
          </Link>
          <div>
            <strong>
              <em>or</em>
            </strong>
          </div>
          <div className={classes.ReserveOnlineMobile}>
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

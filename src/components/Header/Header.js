import React from "react";
import CallToAction from "../CallToAction";
import countMobileCallConversion from "../../utils/google_conversion_mobile_call";
import classes from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";

const Header = () => (
  <div className={classes.HeaderWrapper}>
    <Logo />
    <div>
      <div className={classes.CallActionHeader}>
        <div className={classes.CallTitle}>
          Appelez pour prendre un rendez-vous
        </div>
        <Link
          href="tel:+16132525227"
          className={classes.PhoneNumber}
          onClick={() => countMobileCallConversion()}
        >
          <strong>613-252-5227</strong>
        </Link>
        <div>
          <strong>
            <em>ou</em>
          </strong>
        </div>
        <div className={classes.ReserveOnlineMobile}>
          <CallToAction />
        </div>
      </div>
    </div>
  </div>
);

export default Header;

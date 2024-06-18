import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Navigation.module.css";

const NavLinks = ({ isMobile }) => {
  const router = useRouter();
  const activeLink = {
    color: "#c6c6c6",
    borderBottomColor: `${isMobile ? "rgba(9, 111, 173, 0.5)" : "#c6c6c6"}`,
  };

  return (
    <ul className={classes.NavLinksWrap} style={{ zIndex: 10 }}>
      <li className={classes.ListLinkWrap}>
        <Link
          href="/"
          className={
            router.pathname === "/" ? classes.NavLinkActive : classes.NavLink
          }
          style={router.pathname === "/" ? activeLink : {}}
          passHref
        >
          Accueil
        </Link>
      </li>
      <li className={classes.ListLinkWrap}>
        <Link
          href="/reservation"
          className={
            router.pathname === "/reservation"
              ? classes.NavLinkActive
              : classes.NavLink
          }
          style={router.pathname === "/reservation" ? activeLink : {}}
          passHref
        >
          Prendre Rendez-Vous
        </Link>
      </li>
      <li className={classes.ListLinkWrap}>
        <Link
          href="/contact"
          className={
            router.pathname === "/contact"
              ? classes.NavLinkActive
              : classes.NavLink
          }
          style={router.pathname === "/contact" ? activeLink : {}}
          passHref
        >
          Address et Contact
        </Link>
      </li>
      <li className={classes.ListLinkWrap}>
        <Link
          href="/politique-de-confidentialite"
          className={
            router.pathname === "/politique-de-confidentialite"
              ? classes.NavLinkActive
              : classes.NavLink
          }
          style={
            router.pathname === "/politique-de-confidentialite"
              ? activeLink
              : {}
          }
          passHref
        >
          Confidentialité
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;

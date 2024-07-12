"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navigation.module.css";

const NavLinks = ({ isMobile }) => {
  const pathname = usePathname();
  const activeLink = {
    color: "#c6c6c6",
    borderBottomColor: `${isMobile ? "rgba(9, 111, 173, 0.5)" : "#c6c6c6"}`,
  };

  const links = [
    { href: "/en", text: "Home" },
    { href: "/en/booking", text: "Book an appointment" },
    { href: "/en/contact", text: "Address And Contact" },
    { href: "/en/privacy-policy", text: "Privacy Policy" },
  ];

  return (
    <ul className={classes.NavLinksWrap} style={{ zIndex: 10 }}>
      {links.map((link) => (
        <li key={link.href} className={classes.ListLinkWrap}>
          <Link
            href={link.href}
            className={classes.NavLink}
            style={pathname === link.href ? activeLink : {}}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
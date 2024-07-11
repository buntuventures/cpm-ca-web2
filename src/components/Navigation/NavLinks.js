import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Navigation.module.css";

const NavLinks = ({ isMobile }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const getActiveStyle = (path) => ({
    color: isActive(path) ? "#c6c6c6" : "",
    borderBottomColor: isActive(path)
      ? isMobile
        ? "rgba(9, 111, 173, 0.5)"
        : "#c6c6c6"
      : "",
  });

  const links = [
    { href: "/", text: "Accueil" },
    { href: "/reservation", text: "Prendre Rendez-Vous" },
    { href: "/contact", text: "Address et Contact" },
    { href: "/politique-de-confidentialite", text: "Confidentialité" },
  ];

  return (
    <ul className={classes.NavLinksWrap} style={{ zIndex: 10 }}>
      {links.map((link) => (
        <li key={link.href} className={classes.ListLinkWrap}>
          <Link
            href={link.href}
            className={
              isActive(link.href) ? classes.NavLinkActive : classes.NavLink
            }
            style={getActiveStyle(link.href)}
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;

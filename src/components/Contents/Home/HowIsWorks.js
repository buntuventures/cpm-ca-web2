import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../Content.module.css";

import CalendarIcon from "/images/calendrier-icon.png";
import ContactIcon from "/images/contact-icon.png";
import CheckIcon from "/images/rencontrez-votre-therapeute.png";

const HowIsWork = () => (
  <div style={{ backgroundColor: "#1689DF", color: "#ffffff" }}>
    <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>Comment on fonctionne</h2>
        <h5>
          Les cotisations sont remboursées par l&apos;assurance maladie de base
        </h5>
      </div>
      <div className={classes.HowItWorks}>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={ContactIcon} alt="Contact" width={48} height={48} />
          </div>
          <div style={{ textAlign: "center" }}>
            Appelez-nous au{" "}
            <Link
              style={{ color: "#fff", textDecoration: "underline" }}
              href="tel:+41327214933"
            >
              +41 32 721 49 33
            </Link>{" "}
            (ou bien vous pouvez{" "}
            <Link
              href="/reservation"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              réserver une consultation
            </Link>{" "}
            sur notre site web).
          </div>
        </div>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={CalendarIcon} alt="Calendar" width={48} height={48} />
          </div>
          <div style={{ textAlign: "center" }}>
            Dépendamment de vos besoins, on fixera un rendez-vous avec un
            thérapeute adapté spécialement pour vous.
          </div>
        </div>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={CheckIcon} alt="Check" width={48} height={48} />
          </div>
          <div style={{ textAlign: "center" }}>
            Rencontrez votre spécialiste et entrez sur le chemin de la guérison.
            Des questions? Laissez-nous savoir comment on peut vous assister.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowIsWork;

import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../Content.module.css";
import CalendarIcon from "/images/calendrier-icon.png";
import ContactIcon from "/images/contact-icon.png";
import CheckIcon from "/images/rencontrez-votre-therapeute.png";

const HowItWorks = () => (
  <div style={{ backgroundColor: "#1689DF", color: "#ffffff" }}>
    <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>Comment on fonctionne</h2>
        <h5>Les cotisations sont rembourées par l&apos;assurance maladie de base</h5>
      </div>
      <div className={classes.HowItWorks}>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={ContactIcon}width={24} height={24} alt="Contact Icon" />
          </div>
          <div style={{ textAlign: "center" }}>
            Appelez nous au{" "}
            <Link
              style={{ color: "#fff", textDecoration: "underline" }}
              href="tel:+41327214933"
            >
              +41 32 721 49 33
            </Link>{" "}
            (ou bien vous pouvez{" "}
            <Link
              style={{ color: "#fff", textDecoration: "underline" }}
              href="/reservation"
            >
              réservez une consultation
            </Link>{" "}
            sur notre site web).
          </div>
        </div>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={CalendarIcon} alt="Calendar Icon"width={24} height={24} />
          </div>
          <div style={{ textAlign: "center" }}>
            Dépendamment de vos besoins, on fixera un rendez-vous avec un
            thérapeute adapté spécialement pour vous.
          </div>
        </div>
        <div className={classes.HowItWorksItem}>
          <div style={{ maxWidth: 48 }}>
            <Image src={CheckIcon} width={24} height={24} alt="Check Icon" />
          </div>
          <div style={{ textAlign: "center" }}>
            Rencontrez votre specialiste et entrez sur le chemin de la
            guerrison. Des questions? Laissez nous savoir comment on peut vous
            assister.
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;

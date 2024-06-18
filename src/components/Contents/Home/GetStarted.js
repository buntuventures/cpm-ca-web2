import React from "react";
import Link from "next/link";
import Button from "../../Button/Button";
// import classes from "../Content.module.css";

const GetStarted = () => (
  <div style={{ backgroundColor: "#F6F6F6" }}>
    <div
      style={{
        maxWidth: 700,
        padding: "60px 20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 16 }}>
        Pourquoi attendre pour chercher de l&apos;aide?
      </h2>
      <div>
        <p>
          Prenez un rendez-vous pour commencer un changement positif dans votre
          vie.
        </p>
        <div>
          <Link href="/reservation">
            <Button color="primary" text="Réserver en ligne" />
          </Link>
          <Link href="tel:+16132525227" style={{ marginLeft: 20 }}>
            <Button color="secondary" text="613-252-5227" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default GetStarted;

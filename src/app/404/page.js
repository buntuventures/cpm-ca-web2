"use client";

import React from "react";
import Link from "next/link";
import Head from "next/head";

const NotFoundPage = () => (
  <div style={styles.container}>
    <Head>
      <title>404 Page non trouvée - Veuillez essayer les liens suivants</title>
      <meta
        name="description"
        content="Cette page apparait lorsque la page que vous recherchez est introuvable. Veuillez vérifier l'adresse URL ou essayer les liens suivants."
      />
    </Head>
    <div style={styles.content}>
      <h1 style={styles.title}>Oops!</h1>
      <p style={styles.message}>
        Nous n&apos;arrivons pas à retrouver la page que vous cherchez.
      </p>
      <p style={styles.errorCode}>Code de l&apos;erreur: 404</p>
      <p style={styles.suggestion}>Essayez les liens ci-dessous à la place:</p>
      <ul style={styles.links}>
        <li style={styles.linkItem}>
          <Link href="/">Accueil</Link>
        </li>
        <li style={styles.linkItem}>
          <Link href="/reservation">Réserver une consultation</Link>
        </li>
        <li style={styles.linkItem}>
          <Link href="/prestations">Nos prestations</Link>
        </li>
        <li style={styles.linkItem}>
          <Link href="/contact">Nous rejoindre</Link>
        </li>
      </ul>
    </div>
  </div>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70vh",
    fontFamily: "'Montserrat', sans-serif",
  },
  content: {
    textAlign: "center",
    maxWidth: "600px",
    padding: "20px",
  },
  title: {
    fontSize: "5rem",
    marginBottom: "20px",
    color: "#7a7a7a",
  },
  message: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  },
  errorCode: {
    fontSize: "1.2rem",
    marginBottom: "20px",
    color: "#555",
  },
  suggestion: {
    fontSize: "1.1rem",
    marginBottom: "20px",
    color: "#666",
  },
  links: {
    listStyle: "none",
    padding: 0,
  },
  linkItem: {
    margin: "10px 0",
  },
  link: {
    textDecoration: "none",
    color: "#0070f3",
    fontWeight: "bold",
  },
  linkHover: {
    textDecoration: "underline",
  },
};

export default NotFoundPage;

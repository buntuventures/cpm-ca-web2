"use client";

import React from "react";
import Link from "next/link";

const CrisisLine = () => (
  <div style={styles.pageWrapper}>
    <div style={styles.contentWrapper}>
      <div style={styles.header}>
        <h1 style={styles.mainTitle}>Need Help?</h1>
        <h3 style={styles.subtitle}>
          If you are in crisis or in danger, please use the following resources
          to get immediate help.
        </h3>
      </div>
      <div style={styles.card}>
        <h3>Canada</h3>
        <p style={styles.emergencyNumber}>
          911 <span style={styles.label}>Emergency</span>
        </p>
        <p style={styles.hotlineNumber}>
          +1 (888) 353-2273 <span style={styles.label}>Hotline</span>
        </p>
        <p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.yourlifecounts.org/need-help/crisis-lines"
            style={styles.link}
          >
            YourLifeCounts.org
          </Link>
        </p>
      </div>
    </div>
  </div>
);

const styles = {
  pageWrapper: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  contentWrapper: {
    maxWidth: 700,
    margin: "auto",
    padding: "40px 15px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  mainTitle: {
    fontSize: "2.5rem",
    color: "#333",
  },
  subtitle: {
    fontWeight: 300,
    fontSize: "1.2rem",
    color: "#666",
  },
  card: {
    padding: "20px",
    boxShadow: "0 1px 4px rgba(205, 205, 205, 0.8)",
    borderRadius: "8px",
  },
  emergencyNumber: {
    color: "#e8006b",
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  hotlineNumber: {
    color: "#333",
    fontSize: "1.2rem",
  },
  label: {
    paddingLeft: "20px",
    color: "#555",
    fontStyle: "italic",
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
  },
};

export default CrisisLine;

export const metadata = {
  title: "Crisis Line - Emergency",
  description:
    "If you are in crisis or in danger, please use the following resources to get immediate help",
};

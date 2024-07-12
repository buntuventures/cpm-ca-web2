import React from "react";
import Link from "next/link";
import recordMobileCall from "../../../utils/google_conversion_mobile_call";
import classes from "../Content.module.css";

const HowToGetStarted = () => (
  <div style={{ backgroundColor: "rgb(246, 246, 246)" }}>
    <div
      style={{
        maxWidth: 1170,
        padding: "40px 20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 40 }}>How to get started?</h2>
      <div className={classes.GetStartedWrapper}>
        {[
          {
            number: 1,
            text: <>Call us at <span onClick={() => recordMobileCall()}><Link href="tel:+16132525227">613-252-5227</Link></span> (or <Link href="/en/booking">book online</Link>) and share your problems with us.</>,
          },
          {
            number: 2,
            text: "We will provide you with therapists specifically adapted to your needs.",
          },
          {
            number: 3,
            text: "Meet with your therapist and start the journey to improve yourself.",
          }
        ].map((item, index) => (
          <div
            key={index}
            className={classes.GetStartedItem}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Number>{item.number}</Number>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Number = ({ children }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 40,
      height: 40,
      borderRadius: "50%",
      color: "#fff",
      backgroundColor: "#4cae4c",
      marginBottom: 20,
      fontSize: "1.5rem",
    }}
  >
    {children}
  </div>
);

export default HowToGetStarted;
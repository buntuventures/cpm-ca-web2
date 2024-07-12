import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../Content.module.css";

const HowItWorks = () => (
  <div style={{ backgroundColor: "#1689DF", color: "#ffffff" }}>
    <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>How It Works</h2>
        <h5>Contributions are reimbursed by basic health insurance</h5>
      </div>
      <div className={classes.HowItWorks}>
        {[
          {
            icon: "/images/contact-icon.png",
            text: <>Call us at <Link style={{ color: "#fff", textDecoration: "underline" }} href="tel:+41327214933">+41 32 721 49 33</Link> (or you can <Link style={{ color: "#fff", textDecoration: "underline" }} href="/reservation">book a consultation</Link> on our website).</>,
          },
          {
            icon: "/images/calendrier-icon.png",
            text: "Depending on your needs, we will schedule an appointment with a therapist specifically adapted for you.",
          },
          {
            icon: "/images/rencontrez-votre-therapeute.png",
            text: "Meet your specialist and start on the path to healing. Questions? Let us know how we can assist you.",
          }
        ].map((item, index) => (
          <div key={index} className={classes.HowItWorksItem}>
            <div style={{ maxWidth: 48 }}>
              <Image src={item.icon} width={24} height={24} alt={`Icon ${index + 1}`} />
            </div>
            <div style={{ textAlign: "center" }}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowItWorks;
import React from "react";
// import CallIcon from "/images/call-icon.svg";
import Image from "next/image";
import Link from "next/link";

const CallAction = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF7F00",
      height: 58,
      width: 58,
      padding: "18px 12px 8px",
      position: "fixed",
      bottom: 20,
      right: 20,
      borderRadius: "50%",
    }}
    onClick={() => {
      if (window.gtag) {
        gtag("event", "conversion", {
          send_to: "AW-997202270/gOfzCM28rYQBEN6ywNsD",
        });
        console.log("oui");
      } else {
        console.log("non");
      }
    }}
  >
    <Link href="tel:+16132525227">
      <Image alt="Call" src="/images/call-icon.svg" width={34} height={24} style={{ width: 34, margin: 0 }} />
    </Link>
  </div>
);

export default CallAction;

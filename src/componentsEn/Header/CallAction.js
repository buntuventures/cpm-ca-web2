"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallAction = () => {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-997202270/gOfzCM28rYQBEN6ywNsD",
      });
      console.log("Conversion event sent");
    } else {
      console.log("gtag not available");
    }
  };

  return (
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
      onClick={handleClick}
    >
      <Link href="tel:+16132525227">
        <Image alt="Call" src="/images/call-icon.svg" width={34} height={34} />
      </Link>
    </div>
  );
};

export default CallAction;

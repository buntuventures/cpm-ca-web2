"use client";

import React from "react";
import Image from "next/image";
// import CallIcon from "/images/call-icon.svg";
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
      }
    }}
  >
    <Link href="tel:+16132525227">
      <Image src="/images/call-icon.svg" alt="Call Icon" width={34} height={34} style={{ width: 34, margin: 0 }} />
    </Link>
  </div>
);

export default CallAction;

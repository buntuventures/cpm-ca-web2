import React from "react";
import Link from "next/link";
// import CallIcon from "/images/fill-form-icon.svg";
import Image from "next/image";

const FillFormActions = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4cae4c",
      height: 58,
      width: 58,
      padding: "18px 12px 8px",
      position: "fixed",
      bottom: 20,
      right: "calc(20px + 58px + 10px)",
      borderRadius: "50%",
    }}
  >
    <Link href="/reservation">
      <Image alt="Reservation" src="/images/fill-form-icon.svg" width={34} height={24} style={{ width: 34, margin: 0 }} />
    </Link>
  </div>
);

export default FillFormActions;

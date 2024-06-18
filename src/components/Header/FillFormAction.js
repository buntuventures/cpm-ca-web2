"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
// import CallIcon from "/images/fill-form-icon.svg";

const FillFromAction = () => (
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
    <Link href="/reservation" passHref>
      <Image
        src="/images/fill-form-icon.svg"
        alt="Fill Form Icon"
        width={34} height={34}
        style={{ width: 34, margin: 0 }}
      />
    </Link>
  </div>
);

export default FillFromAction;

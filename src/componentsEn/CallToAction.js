"use client";

import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "next/navigation";
import Button from "@/components/Button/Button";

const CallToAction = ({ type }) => {
  const searchParams = useSearchParams();

  if (type === "call") {
    return <button>Call to Book an Appointment</button>;
  }

  const href = {
    pathname: "/en/booking",
    query: { item: "navigation", ...Object.fromEntries(searchParams) },
  };

  return (
    <Button
      color="primary"
      text="Book Online"
      clicked={href}
    />
  );
};

CallToAction.propTypes = {
  type: PropTypes.string,
};

CallToAction.displayName = "CallToAction";
export default CallToAction;

"use client";

import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import Button from "./Button/Button";

const CallToAction = ({ type }) => {
  const router = useRouter();

  const handleReservationClick = () => {
    router.push("/reservation?item=navigation");
  };

  if (type === "call") {
    return (
      <button onClick={() => (window.location.href = "tel:+16132525227")}>
        Appelez pour Réserver
      </button>
    );
  }

  return (
    <Button
      color="primary"
      text="Réserver en ligne"
      clicked={handleReservationClick}
    />
  );
};

CallToAction.propTypes = {
  type: PropTypes.string,
};

export default CallToAction;

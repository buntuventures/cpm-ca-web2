"use client";

import React from "react";
import ExtendedForm from "@ExtendedFormEn/ExtendedForm";

const Booking = ({ location }) => {
  let formData;
  if (location && location.data) {
    formData = location.data.state;
  }
  return (
    <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
      <div>
        <ExtendedForm formData={formData} />
      </div>
    </div>
  );
};

export default Booking;

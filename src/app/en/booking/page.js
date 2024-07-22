"use client";

import React, { Suspense } from "react";
import ExtendedForm from "@ExtendedFormEn/ExtendedForm";
import { useSearchParams } from "next/navigation";

const Booking = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppointmentContent />
    </Suspense>
  );
};

const AppointmentContent = () => {
  const searchParams = useSearchParams();
  const formData = searchParams.get("data") ? JSON.parse(searchParams.get("data")) : null;

  return (
    <div>
      <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
        <div>
          <ExtendedForm formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Booking;

export const metadata = {
  title: "Book an appointment with CPM online",
  description: "Use our online appointment booking form and we will contact you within 24 hours to schedule an appointment.",
};
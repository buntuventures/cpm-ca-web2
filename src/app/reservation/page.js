"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const DynamicExtendedForm = dynamic(
  () => import("@ExtendedForm/ExtendedForm"),
  {
    ssr: false,
  }
);

const ReservationContent = () => {
  const searchParams = useSearchParams();
  const formData = searchParams.get("data")
    ? JSON.parse(searchParams.get("data"))
    : null;

  return (
    <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
      <div>
        <DynamicExtendedForm formData={formData} />
      </div>
    </div>
  );
};

const Reservation = () => {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ReservationContent />
    </Suspense>
  );
};

export default Reservation;

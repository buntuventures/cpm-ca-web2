// src/pages/appointment.js
"use client";

import React from "react";
import ExtendedForm from "../components/Forms/ExtendedForm";
import Head from "next/head";
import { useRouter } from "next/router";

const Appointment = () => {
  const router = useRouter();
  const formData = router.query.data ? JSON.parse(router.query.data) : null;

  return (
    <div>
      <Head>
        <html lang="fr" />
        <title>Pendre un rendez-vous avec le CPM en ligne</title>
        <meta
          name="description"
          content="Utilisez notre formulaire de réservation de rendez-vous en ligne et on vous contactera dans moins de 24hrs pour fixer un rendez-vous."
        />
      </Head>
      <div style={{ maxWidth: 4024, padding: "40px 20px", margin: "auto" }}>
        <div>
          <ExtendedForm formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;

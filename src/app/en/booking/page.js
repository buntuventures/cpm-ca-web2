"use client";

import React from "react";
import ExtendedForm from "@ExtendedFormEn/ExtendedForm";
import Head from "next/head";
import { useRouter } from "next/router";

const Appointment = () => {
  const router = useRouter();
  const formData = router.query.data ? JSON.parse(router.query.data) : null;

  return (
    <div>
      <Head>
        <title>Book an appointment with CPM online</title>
        <meta
          name="description"
          content="Use our online appointment booking form and we will contact you within 24 hours to schedule an appointment."
        />
      </Head>
      <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
        <div>
          <ExtendedForm formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;

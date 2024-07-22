"use client";

import React from "react";
import Footer from "@/componentsEn/Footer/Footer";
import Head from "next/head";

const PrivacyPolicy = () => (
  <div>
    <Head>
      <title>Privacy Policy of CPM-CA.org</title>
    </Head>
    <div style={{ maxWidth: 1170, padding: "20px", margin: "auto" }}>
      <h1>Privacy Policy</h1>
      <h3>Terms of Use and Confidentiality</h3>
      <h5>
        This form is intended for adult individuals residing in Canada, with or
        without insurance.
      </h5>
      <p>
        <strong>1. Emergency</strong>
        <br />
        In case of emergency, we recommend that you immediately call your
        treating physician or your local emergency service.
      </p>
      <p>
        <strong>2. Processing of Requests</strong>
        <br />
        The appointment request is received by the Admissions Service of CPM
        (Center for Psychotraumatology and Mediation). They will contact you to
        propose a consultation date or, if necessary, ask for additional
        information.
      </p>
      <p>
        <strong>3. Timeframes</strong>
        <br />
        You will be contacted within 1 business day to receive an appointment
        proposal or, if necessary, to provide the concerned service with
        additional information. If you are not reachable within this time, we
        will try to contact you for up to 5 business days. We invite you to
        contact us again if we do not reach you within these timeframes.
      </p>
      <p>
        <strong>4. Incomplete Requests</strong>
        <br />
        CPM reserves the right not to respond to any incomplete request.
      </p>
      <p>
        <strong>5. Personal Contact Information</strong>
        <br />
        You will be contacted directly by phone during office hours (9AM – 12PM
        & 1PM – 5PM) or by email using the contact information you have
        provided. If you cancel or reschedule your first appointment with less
        than 48 hours notice, or if you do not show up, you will be charged the
        full amount of the consultation.
      </p>
      <p>
        <strong>6. Confidentiality</strong>
        <br />
        By submitting your contact information (phone, email, postal address),
        you authorize CPM to send you confidential information regarding your
        appointment request to these contacts. We draw your attention to
        ensuring that unauthorized persons, especially those in your
        environment, do not have access to these contact details. CPM cannot be
        held responsible if confidential information communicated through your
        personal contact information is seen by unauthorized persons.
      </p>
      <p>
        <strong>7. Data Protection</strong>
        <br />
        Protecting the privacy of patients whose personal data is processed
        within our institution is a legal obligation. Federal and cantonal
        legislation on medical confidentiality and data protection requires us
        to protect this personal data against misuse. CPM takes all necessary
        measures to prevent illegal processing of patient data.
      </p>
      <p>
        <strong>
          I confirm that I have read and understood the aforementioned terms of
          use.
        </strong>
      </p>
      <p>
        <strong>
          I commit to taking the necessary measures to ensure that unauthorized
          persons cannot access the information that the Psy-Scan Institute will
          transmit to me through my personal contact information.
        </strong>
      </p>
      <p>
        <strong>
          CPM cannot be held responsible in case of non-compliance by the
          requestor with the aforementioned terms of use.
        </strong>
      </p>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;
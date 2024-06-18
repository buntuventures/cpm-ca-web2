"use client";

import React, { Component } from "react";
import ExtendedForm from "@ExtendedForm/componentsEn/Forms/ExtendedForm";
import Head from "next/head";

export default class Booking extends Component {
  render() {
    let formData;
    if (this.props.location && this.props.location.data) {
      formData = this.props.location.data.state;
    }
    return (
      <div>
        <Head>
          <html lang="en" />
          <title>Book an Appointment Online with the CPM</title>
          <meta
            name="description"
            content="Use our appointment form to book your appointment online. We will contact you in less than 24 hours to schedule a session."
          />
        </Head>
        <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
          <div>
            <ExtendedForm formData={formData} />
          </div>
        </div>
      </div>
    );
  }
}

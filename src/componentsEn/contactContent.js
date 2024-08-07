"use client";

import React, { Component } from "react";
import Link from "next/link";
import Footer from "@/componentsEn/Footer/Footer";
import Iframe from "@/componentsEn/Iframe/Iframe";
import classes from "@/styles/Pages.module.css";

class ContactContent extends Component {
  render() {
    const { gDeviceWidth: deviceWidth } = this.props;
    return (
      <div>
        <div>
          <div style={{ maxWidth: 1170, padding: "20px", margin: "auto" }}>
            <div className={classes.Address}>
              <div
                className={classes.AddressBock}
                style={{ display: "flex", alignItems: "center", padding: 0 }}
              >
                <div>
                  <h1>Contact Us</h1>
                  <p>
                    <strong>
                      CPM: Center for Psychotraumatology and Mediation
                    </strong>
                    <br />
                    <span style={{ color: "#1689DF" }}>
                      Monday - Friday: 9AM - 12PM & 1PM - 5PM
                    </span>
                    <br />
                    427 McArthur Ave, 2nd Floor, Suite #3
                    <br />
                    Ottawa (ON) K1K 1G5, Canada
                    <br />
                    Tel. +1 (613) 252-5227
                    <br />
                    E-mail: info@cpm-ca.org
                    <br />
                    <Link href="/en/booking">
                      <em>
                        <strong>or Book an Appointment Online</strong>
                      </em>
                    </Link>
                  </p>
                </div>
              </div>
              <div className={classes.AddressBockMap}>
                <div>
                  <Iframe
                    width="100%"
                    height={`${deviceWidth > 767 ? "400px" : "300px"}`}
                    src={
                      "https://www.google.com/maps/embed/v1/place?key=AIzaSyD5d58sVD8JymoPG0mWxmQP8glK9_m9cI4&q=427+McArthur+Ave,Ottawa,ON"
                    }
                  />
                </div>
              </div>
            </div>
            <div className={classes.Cancellation}>
              <div className={classes.CancellationItem}>
                <h2>Cancel an Appointment</h2>
                <p>
                  If you cancel or reschedule your first appointment with less
                  than 48 hours notice, or if you do not show up, you will be
                  charged the full amount of the consultation.
                </p>
              </div>
              <div className={classes.CancellationItem}>
                <h2>Reimbursement</h2>
                <p>
                  All our consultations can be partially or totally reimbursed
                  by certain insurances. For further information please contact
                  the secretariat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactContent;

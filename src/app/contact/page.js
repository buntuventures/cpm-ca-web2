import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Iframe from "@/components/Iframe/Iframe";

import classes from "@/styles/Pages.module.css";

const Contact = ({ gDeviceWidth }) => {
  const deviceWidth = gDeviceWidth;

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
                <h1>Contactez-nous</h1>
                <p>
                  <strong>
                    CPM : Centre de Psychotraumatologie et de Médiation
                  </strong>
                  <br />
                  <span style={{ color: "#1689DF" }}>
                    Lundi - Vendredi : 9h - 12h & 13h - 17h
                  </span>
                  <br />
                  427 avenue McArthur, 2e étage, Bureau #3
                  <br />
                  Ottawa (ON) K1K 1G5, Canada
                  <br />
                  Tél. +1 (613) 252-5227
                  <br />
                  E-mail : info@cpm-ca.org
                  <br />
                  <Link href="/reservation">
                    <em>
                      <strong>ou Réservez un rendez-vous en ligne</strong>
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
              <h2>Annuler un rendez-vous</h2>
              <p>
                Si vous annulez ou reportez votre premier rendez-vous avec moins
                de 48 heures de préavis, ou si vous ne vous présentez pas, le
                montant total de la consultation vous sera facturé.
              </p>
            </div>
            <div className={classes.CancellationItem}>
              <h2>Remboursement</h2>
              <p>
                Toutes nos consultations peuvent être partiellement ou
                totalement remboursées par certaines assurances. Pour plus
                d&apos;informations, veuillez contacter le secrétariat.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

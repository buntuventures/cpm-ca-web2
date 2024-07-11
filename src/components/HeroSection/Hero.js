import React from "react";
import Link from "next/link";
import ReactPlayer from "react-player";
import Button from "../Button/Button";
import LeadForm from "../Forms/LeadForm";
import countMobileCallConversion from "../../utils/google_conversion_mobile_call";
import Mozaique from "./Mozaique";
import MozaiqueStyles from "./Mozaique.module.css";
import { HERO_VIDEO_FR } from "../../constants/videos";

const HeroSection = (props) => (
  <Mozaique {...props}>
    <div className={MozaiqueStyles.Wrapper}>
      <div className={MozaiqueStyles.InnerContentLeft}>
        <h1 className={MozaiqueStyles.H1}>
          Service de Counselling et Thérapie{" "}
        </h1>
        <div className={MozaiqueStyles.SubH1}>
          Découvrez comment le CPM peut vous aider
        </div>
        <div className={MozaiqueStyles.VideoWrapper}>
          <ReactPlayer
            url={HERO_VIDEO_FR}
            config={{
              wistia: {
                options: {
                  playerColor: "#1689DF",
                },
              },
            }}
            width="100%"
            height="100%"
          />
        </div>
        <VideoFooterText />
      </div>
      <div
        style={{ padding: 10, position: props.position, top: props.top }}
        className={MozaiqueStyles.FullLeadForm}
      >
        <LeadForm {...props} />
      </div>
      <MobileHeroCallToAction {...props} />
    </div>
  </Mozaique>
);

const VideoFooterText = () => (
  <div
    style={{ fontSize: "0.8rem", padding: "10px 0 0" }}
    className={MozaiqueStyles.VideoFooterText}
  >
    <div
      style={{
        fontSize: "0.9rem",
        backgroundColor: "#04040487",
        padding: "0 10px",
        fontWeight: 500,
        display: "inline-block",
      }}
    >
      Nos consultations peuvent être partiellement remboursées par certaines
      assurances.
    </div>
    <div
      style={{
        backgroundColor: "#04040487",
        padding: "0 10px",
        display: "inline-block",
      }}
    >
      Les places sont limitées dues à la forte demande des services de
      consultation.
    </div>
  </div>
);

const MobileHeroCallToAction = (props) => (
  <div
    style={{ textAlign: "center", padding: 20 }}
    className={MozaiqueStyles.MobileCallToAction}
  >
    <Link href="/reservation">
      <Button
        color="primary"
        text="Réservez une Consultation en Ligne"
        styles={buttonStyles}
      />
    </Link>
    <div style={{ padding: 10 }}>
      <h4 style={{ color: "#fff", marginBottom: 10, fontSize: "0.9rem" }}>
        Ou appelez nous maintenant
      </h4>
      <Link href="tel:+16132525227" onClick={() => countMobileCallConversion()}>
        <Button color="secondary" text="613-252-5227" styles={buttonStyles} />
      </Link>
    </div>
    <VideoFooterText />
  </div>
);

const buttonStyles = {
  padding: 10,
  minWidth: 200,
};

export default HeroSection;

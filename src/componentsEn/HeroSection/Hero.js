"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ReactPlayer from "react-player";
import Button from "../Button/Button";
import LeadForm from "../Forms/LeadForm";
import countMobileCallConversion from "../../utils/google_conversion_mobile_call";
import Mozaique from "./Mozaique";
import MozaiqueStyles from "./Mozaique.module.css";
import { HERO_VIDEO_EN } from "../../constants/videos";
import Link from "next/link";

const HeroSection = (props) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  return (
    <Mozaique {...props}>
      <div className={MozaiqueStyles.Wrapper}>
        <div className={MozaiqueStyles.InnerContentLeft}>
          <h1 className={MozaiqueStyles.H1}>Counselling and Therapy Service</h1>
          <div className={MozaiqueStyles.SubH1}>
            Find out how the CPM can help you
          </div>

          <div className={MozaiqueStyles.VideoWrapper}>
            <ReactPlayer
              url={HERO_VIDEO_EN}
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
};

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
      Our consultations are partially reimbursable by certain insurances.
    </div>
    <div
      style={{
        backgroundColor: "#04040487",
        padding: "0 10px",
        display: "inline-block",
      }}
    >
      Spots are limited due to the high demand for counselling services.
    </div>
  </div>
);

const MobileHeroCallToAction = (props) => {
  const router = useRouter();

  return (
    <div
      style={{ textAlign: "center", padding: 20 }}
      className={MozaiqueStyles.MobileCallToAction}
    >
      <Button
        color="primary"
        text="Book an Online Consultation"
        clicked={() => router.push("/reservation")}
        styles={buttonStyles}
      />
      <div style={{ padding: 10 }}>
        <h4 style={{ color: "#fff", marginBottom: 10, fontSize: "0.9rem" }}>
          Or call us now
        </h4>
        <Link href="tel:+16132525227" onClick={countMobileCallConversion}>
          <Button color="secondary" text="613-252-5227" styles={buttonStyles} />
        </Link>
      </div>
      <VideoFooterText />
    </div>
  );
};

const buttonStyles = {
  padding: 10,
  minWidth: 200,
};

export default HeroSection;

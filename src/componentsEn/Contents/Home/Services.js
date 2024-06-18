import React from "react";
import Image from "next/image";
import classes from "../Content.module.css";
// import ArrowRight from "/images/arrow-right.svg";

const Services = () => (
  <div style={{ backgroundColor: "#f6f6f6" }}>
    <div
      style={{
        maxWidth: 1170,
        padding: "40px 20px",
        margin: "auto",
        display: "flex",
      }}
      className=""
    >
      <div className={classes.ServiceWrapper}>
        <h1 style={{ margin: "0 0 10px 0" }}>Therapeutic Services</h1>
        <h4>Discover what&apos;s best for you</h4>
        <div
          style={{
            width: 100,
            height: 2,
            backgroundColor: "#1689DF",
            marginBottom: 40,
          }}
        />
        <p style={{ textAlign: "left" }}>
          Our team takes pride in helping you. Our expertise spans the spectrum
          of psychological problems and conditions, from the most basic to the
          most complex. This includes:
        </p>
        <div className={classes.ServiceList}>
          <ul>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Anxieties
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Phobias and fears
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Relationship difficulties
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Depressions
            </li>
          </ul>
          <ul>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Family problems
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Burnout
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Professional difficulties
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Identity concerns
            </li>
          </ul>
          <ul>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Traumas
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Lack of self-esteem
            </li>
            <li>
              <Image src="/images/arrow-right.svg" width={2} height={2} alt="Arrow Icon" />{" "}
              Addictions
            </li>
          </ul>
        </div>
        <p>
          The above list is not exhaustive, and we will gladly do our best to
          help you in your difficulties.
        </p>
      </div>
    </div>
  </div>
);

export default Services;

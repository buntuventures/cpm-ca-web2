import React from "react";
import Image from "next/image";
import classes from "../Content.module.css";

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
        <h1 style={{ margin: "0 0 10px 0" }}>Therapy Services</h1>
        <h4>Discover the best for you</h4>
        <div
          style={{
            width: 100,
            height: 2,
            backgroundColor: "#1689DF",
            marginBottom: 40,
          }}
        ></div>
        <p style={{ textAlign: "left" }}>
          Our team is proud to be able to assist you. Our expertise covers the
          spectrum of psychological problems and conditions, from the most basic
          to the most complex. This includes:
        </p>
        <div className={classes.ServiceList}>
          <ul>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Anxiety
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Phobias and fears
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Relationship difficulties
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Depression
            </li>
          </ul>
          <ul>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Family issues
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Burnout
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Professional difficulties
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Identity concerns
            </li>
          </ul>
          <ul>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Trauma
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Low self-esteem
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Addictions
            </li>
          </ul>
        </div>
        <p>
          The above list is not exhaustive, and we will gladly do our best to
          help you with your difficulties.
        </p>
      </div>
    </div>
  </div>
);

export default Services;

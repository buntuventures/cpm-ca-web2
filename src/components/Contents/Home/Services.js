import React from "react";
import Image from "next/image";
import classes from "../Content.module.css";
// import ArrowRight from '/images/arrow-right.svg';

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
        <h1 style={{ margin: "0 0 10px 0" }}>Services de Thérapie</h1>
        <h4>Découvrez le meilleur pour vous</h4>
        <div
          style={{
            width: 100,
            height: 2,
            backgroundColor: "#1689DF",
            marginBottom: 40,
          }}
        ></div>
        <p style={{ textAlign: "left" }}>
          Notre équipe est fière de pouvoir vous venir en aide. Notre expertise
          couvre l&apos;éventail des problèmes et des conditions psychologiques,
          du plus élémentaire au plus complexe. Cela inclut:
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
              Anxiété
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Phobies et peurs{" "}
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Difficultés relationnelles
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Dépressions
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
              Problèmes familiaux{" "}
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
              Difficultés professionnelles{" "}
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Soucis d&apos;identité{" "}
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
              Traumatismes{" "}
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Manque d&apos;estime de soi
            </li>
            <li>
              <Image
                src="/images/arrow-right.svg"
                width={20}
                height={20}
                alt="Arrow Right"
              />{" "}
              Dépendances
            </li>
          </ul>
        </div>
        <p>
          La liste susmentionnée n&apos;est pas exhaustive, et avec plaisir nous
          ferons de notre mieux pour vous aider dans vos difficultés.
        </p>
      </div>
    </div>
  </div>
);

export default Services;

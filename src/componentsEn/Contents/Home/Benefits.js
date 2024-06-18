import React from "react";
import classes from "../Content.module.css";
// import SideImage from "/images/services-image.jpg";

const Benefits = () => (
  <div className={classes.BenefitsWrapper}>
    <div
      style={{ maxWidth: 585, padding: "40px 20px", margin: "auto" }}
      className={classes.BenefitsTextWrapper}
    >
      <h2 style={{ marginBottom: 40 }}>
        What are the benefits of therapy?
      </h2>
      <div
        style={{
          width: 100,
          height: 2,
          backgroundColor: "#1689DF",
          marginBottom: 40,
        }}
      ></div>
      <div>
        <p>
          Sometimes it is easier to talk to a stranger than to parents or friends, but even better to a professional. During therapy, a trained counselor or therapist listens to you and helps you find your own answers to problems, with empathy and without judgment.
        </p>
        <br/>
        <p>
          The therapist will give you time to talk, cry, shout, or simply think. It is an opportunity to look at your problems differently with someone who will respect you and your opinions.
        </p>
      </div>
    </div>
    <div
      className={classes.BenefitsImage}
      style={{ backgroundImage: `url("/images/services-image.jpg")` }}
    ></div>
  </div>
);

export default Benefits;

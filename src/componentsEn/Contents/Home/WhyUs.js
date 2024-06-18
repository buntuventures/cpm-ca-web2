import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../Content.module.css";
// import DoneIcon from "/images/icon-done.svg";
// import TherapieIndividuelleImage from "/images/therapie-individuelle-image.jpg";
// import TherapieDeCoupleImage from "/images/therapie-de-couple.jpg";
// import TherapieFamilialeImage from "/images/therapie-familiale.jpg";
// import PsychoEducationImage from "/images/psychoeducation.jpg";
// import PourquoiImage from "/images/pourquoi-le-cpm.jpg";

const WhyUs = () => (
  <div className={classes.SideImageWrapper}>
    <div
      className={classes.SideImageWhyUs}
      style={{ backgroundImage: `url("/images/pourquoi-le-cpm.jpg")` }}
    ></div>
    <div className={classes.SideContentWrapper}>
      <div className="">
        <h1 style={{ margin: "0 0 40px 0" }}>Why choose CPM?</h1>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={14} height={14} alt="Done" className={classes.CheckIcon} />
          We are professionals
        </h4>
        <p>
          All our therapists are well-trained and experienced professionals. Our therapists have met rigorous training requirements and are ready to provide you with the best support.
        </p>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={24} height={24} alt="Done" className={classes.CheckIcon} />
          We are fast
        </h4>
        <p>
          It can be difficult to wait days or weeks for your first appointment, especially during vulnerable times. With CPM, you will get an appointment as soon as possible.
        </p>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={24} height={24} alt="Done" className={classes.CheckIcon} />
          Affordable service
        </h4>
        <p>
          We have affordable rates and we can also be covered by some insurance plans, but our services are not covered by OHIP.
        </p>
        <p>
          Our fees are $150 per hour for individual sessions and $200 for couple or family sessions, which last an hour and a half. If you are experiencing financial difficulties, do not hesitate to{" "}
          <Link href="/contact">contact us</Link> to discuss if you can receive a reduced rate.
        </p>
      </div>
    </div>
  </div>
);

export default WhyUs;

export const IndividualTherapy = () => (
  <div className={classes.SideImageWrapper}>
    <div className={[classes.SideContentWrapper, classes.TherapieIndividuelle].join(" ")}>
      <h2>Individual Therapy</h2>
      <p>
        Individual therapy aims to treat the individual&apos;s emotional, relational, and psychological disorders. This service is available to adolescents and adults.
      </p>
    </div>
    <div className={classes.SideImageTherapies} style={{ backgroundImage: `url("/images/therapie-individuelle-image.jpg")` }}></div>
  </div>
);

export const CoupleTherapy = () => (
  <div className={[classes.SideImageWrapper, classes.TherapieCoupleWrapper].join(" ")}>
    <div className={[classes.SideImageTherapies, classes.TherapieCouple].join(" ")} style={{ backgroundImage: `url("/images/therapie-de-couple.jpg")` }}></div>
    <div className={classes.SideContentWrapper}>
      <h2>Couple Therapy</h2>
      <p>
        Couple therapy is intended for couples, whether married or not, and for people facing difficulties living together. It aims to help couples overcome relationship problems and strengthen emotional closeness and restore their relationship to a healthier and more balanced level of functioning.
      </p>
    </div>
  </div>
);

export const FamilyTherapy = () => (
  <div className={classes.SideImageWrapper}>
    <div className={classes.SideContentWrapper}>
      <h2>Family Therapy</h2>
      <p>
        Family therapy targets the family as a social system. It is aimed at all families having relationship difficulties to improve mutual understanding and increase emotional support among family members, particularly during transition phases (children&apos;s adolescence, parent&apos;s separation, unemployment, retirement, etc.) and difficult events, such as death or serious illness in the family.
      </p>
    </div>
    <div className={classes.SideImageTherapies} style={{ backgroundImage: `url("/images/therapie-familiale.jpg")` }}></div>
  </div>
);

export const PsychoEducation = () => (
  <div className={[classes.SideImageWrapper, classes.PsychoeducationWrapper].join(" ")}>
    <div className={classes.SideImageTherapies} style={{ backgroundImage: `url("/images/psychoeducation.jpg")` }}></div>
    <div className={classes.SideContentWrapper}>
      <h2>Psychoeducation</h2>
      <p>
        We provide psychoeducation on a variety of issues related to the education of children and teenagers. The goal is to help parents effectively manage the behavioral and emotional difficulties of their child or teen.
      </p>
    </div>
  </div>
);

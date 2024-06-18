import React from "react";
import Image from "next/image";
import classes from "./Press.module.css";

import LeMonde from "/images/press-le-monde.png";
import ArcInfo from "/images/press-arc-info.png";
import CanalAlpha from "/images/press-canal-alpha.png";

import AOne from "/images/canada-counselling-and-psy.jpeg";
import ATwo from "/images/canada-positiv-psy-association.jpg";
import AThree from "/images/Canadian_Psychological_Association_Logo.jpg";
import AFour from "/images/CPA-Bilingual.png";
import AFive from "/images/world-psy-association.png";

const Press = () => (
  <div className={classes.Wrapper}>
    <div style={{ maxWidth: 1170, padding: 15, margin: "auto" }}>
      <div>PARU DANS</div>
      <div className={classes.Logos}>
        <div className={classes.LogoWrapper}>
          <Image className={classes.Logo} width={24} height={24} src={LeMonde} alt="Le Monde Logo" />
        </div>
        <div className={classes.LogoWrapper}>
          <Image className={classes.Logo} width={24} height={24} src={ArcInfo} alt="Arc Info Logo" />
        </div>
        <div className={classes.LogoWrapper}>
          <Image
            className={classes.Logo}
            src={CanalAlpha}
            width={24} height={24}
            alt="Canal Alpha Logo"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Press;

export const Associations = () => (
  <div>
    <div
      style={{
        maxWidth: 1170,
        padding: 15,
        margin: "auto",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: 20 }}>RECONNU PAR</div>
      <div className={classes.Associations}>
        <div className={classes.Association}>
          <Image src={AOne} width={24} height={24} alt="Canada Counselling And Psy" />
        </div>
        <div className={classes.Association}>
          <Image src={ATwo} width={24} height={24} alt="Canada Positive Psy Association" />
        </div>
        <div className={classes.Association}>
          <Image src={AFour} width={24} height={24} alt="CPA Bilingual" />
        </div>
        <div className={classes.Association}>
          <Image src={AThree} width={24} height={24} alt="Canadian Psychological Association" />
        </div>
        <div className={classes.Association}>
          <Image src={AFive} width={24} height={24} alt="World Psy Association" />
        </div>
      </div>
    </div>
  </div>
);

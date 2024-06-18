import React from "react";
import Image from "next/image";
import classes from "./Press.module.css";
import LeMonde from "../../../../psy-scan-bitbucket/src/images/press-le-monde.png";
import ArcInfo from "../../../../psy-scan-bitbucket/src/images/press-arc-info.png";
import CanalAlpha from "../../../../psy-scan-bitbucket/src/images/press-canal-alpha.png";
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
        <Image className={classes.Logo} width={24} height={24} src={LeMonde} alt="Forbes Logo" />
        <Image
          className={classes.Logo}
          src={ArcInfo}
          width={24} height={24}
          alt="Fiancial Times Logo"
        />
        <Image className={classes.Logo} width={24} height={24} src={CanalAlpha} alt="BBC Logo" />
      </div>
    </div>
  </div>
);

Press.displayName = "Press";

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
          <Image src={ATwo} width={24} height={24} alt="Fiancial Times Logo" />
        </div>
        <div className={classes.Association}>
          <Image src={AFour} width={24} height={24} alt="Channel 5 Logo" />
        </div>
        <div className={classes.Association}>
          <Image src={AThree} width={24} height={24} alt="BBC Logo" />
        </div>
        <div className={classes.Association}>
          <Image src={AFive} width={24} height={24} alt="Telegraph Logo" />
        </div>
      </div>
    </div>
  </div>
);

Associations.displayName = "Associations";

export default Press;

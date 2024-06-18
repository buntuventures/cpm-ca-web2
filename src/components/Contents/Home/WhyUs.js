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
        <h1 style={{ margin: "0 0 40px 0" }}>Pourquoi le CPM?</h1>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={14} height={14} alt="Done" className={classes.CheckIcon} />
          Nous sommes professionnels
        </h4>
        <p>
          Tous nos thérapeutes sont des professionnels bien formés et
          expérimentés. Nos thérapeutes ont satisfait aux exigences rigoureuses
          de formation et ils sont prêts pour vous assurer le meilleur soutien.
        </p>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={24} height={24}  alt="Done" className={classes.CheckIcon} />
          On est rapide
        </h4>
        <p>
          Il peut être difficile d&apos;attendre des jours ou des semaines
          jusqu&apos;à votre premier rendez-vous surtout durant les périodes de
          vulnérabilité. Avec le CPM vous obtiendrez un rendez-vous dans les
          plus brefs délais.
        </p>
      </div>
      <div>
        <h4 className={classes.WhyItemTitle}>
          <Image src="/images/icon-done.svg" width={24} height={24}  alt="Done" className={classes.CheckIcon} />
          Service abordable
        </h4>
        <p>
          Nous avons des prix abordables et nous pouvons aussi être pris en
          charge par certaines assurances mais nos services ne sont pas couverts
          par l&apos;OHIP.
        </p>
        <p>
          Nos honoraires sont de 150$ l&apos;heure pour la séance individuelle
          et 200$ pour la séance de couple ou de famille qui dure une heure et
          demie. Si vous avez des difficultés financières, n&apos;hésitez pas à{" "}
          <Link href="/contact">communiquer avec nous</Link> pour discuter si
          vous pouvez avoir un prix réduit.
        </p>
      </div>
    </div>
  </div>
);

export default WhyUs;

export const TherapieIndividuelle = () => (
  <div className={classes.SideImageWrapper}>
    <div
      className={[
        classes.SideContentWrapper,
        classes.TherapieIndividuelle,
      ].join(" ")}
    >
      <h2>Thérapie Individuelle</h2>
      <p>
        La thérapie individuelle vise à traiter les troubles émotionnels,
        relationnels et psychologiques de l&apos;individu. Cette prise en charge
        est disponible aux adolescents et aux adultes.
      </p>
    </div>
    <div
      className={classes.SideImageTherapies}
      style={{ backgroundImage: `url("/images/therapie-individuelle-image.jpg")` }}
    ></div>
  </div>
);

export const TherapieCouple = () => (
  <div
    className={[classes.SideImageWrapper, classes.TherapieCoupleWrapper].join(
      " "
    )}
  >
    <div
      className={[classes.SideImageTherapies, classes.TherapieCouple].join(" ")}
      style={{ backgroundImage: `url("/images/therapie-de-couple.jpg")` }}
    ></div>
    <div className={classes.SideContentWrapper}>
      <h2>Thérapie de Couple</h2>
      <p>
        La thérapie de couple s&apos;adresse aux couples, mariés ou non, et aux
        personnes confrontées aux problèmes de la vie commune. Elle vise à aider
        les couples à surmonter les difficultés relationnelles et à renforcer la
        proximité émotionnelle et à rétablir leur relation à un niveau de
        fonctionnement plus sain et plus équilibré.
      </p>
    </div>
  </div>
);

export const TherapieFamille = () => (
  <div className={classes.SideImageWrapper}>
    <div className={classes.SideContentWrapper}>
      <h2>Thérapie Familiale</h2>
      <p>
        La thérapie familiale vise la famille en tant que système social. Elle
        s&apos;adresse à toutes familles ayant des difficultés relationnelles à
        améliorer la compréhension mutuelle et accroître le soutien affectif des
        membres de la famille, en particulier pendant les phases de transition
        (adolescence des enfants, séparation des parents, chômage, retraite,
        etc.. ) et des évènements difficiles, comme la mort ou une maladie grave
        dans la famille.
      </p>
    </div>
    <div
      className={classes.SideImageTherapies}
      style={{ backgroundImage: `url("/images/therapie-familiale.jpg")` }}
    ></div>
  </div>
);

export const PsychoEducation = () => (
  <div
    className={[classes.SideImageWrapper, classes.PsychoeducationWrapper].join(
      " "
    )}
  >
    <div
      className={classes.SideImageTherapies}
      style={{ backgroundImage: `url("/images/psychoeducation.jpg")` }}
    ></div>
    <div className={classes.SideContentWrapper}>
      <h2>Psychoéducation</h2>
      <p>
        Nous faisons de la psychoéducation sur une variété de problèmes
        d&apos;éducation des enfants et des adolescents. L&apos;objectif est
        d&apos;aider les parents à gérer efficacement les difficultés
        comportementales et émotionnelles de leur enfant ou adolescent.
      </p>
    </div>
  </div>
);

"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Carousel from "@/components/Carousel/Carousel";
import MoreInfoSection from "@/components/Contents/Home/MoreInfo";
import Footer from "@/components/Footer/Footer";
// import HeroSection from "@/components/HeroSection/Hero";
import Services from "@/components/Contents/Home/Services";
import IntroText from "@/components/Contents/Home/IntroText";
import WhyUs, {
  TherapieIndividuelle,
  PsychoEducation,
  TherapieCouple,
  TherapieFamille,
} from "@/components/Contents/Home/WhyUs";
import HowToGetStarted from "@/components/Contents/Home/HowToGetStarted";
import Benefits from "@/components/Contents/Home/Benefits";
import GetStarted from "@/components/Contents/Home/GetStarted";
import { useRouter } from "next/router";
// import MobileActions from "@/components/MobileActions/MobileActions";

// Charger dynamiquement les composants qui peuvent causer des problèmes d'hydratation
const DynamicHeroSection = dynamic(
  () => import("@/components/HeroSection/Hero"),
  { ssr: false }
);
const DynamicMobileActions = dynamic(
  () => import("@/components/MobileActions/MobileActions"),
  { ssr: false }
);

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updateDeviceState = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };

    updateDeviceState();
    window.addEventListener("resize", updateDeviceState);
    window.addEventListener("scroll", updateScrollPosition);

    return () => {
      window.removeEventListener("resize", updateDeviceState);
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  

  return (
    <>
      <Head>
        <html lang="fr" />
        <title>Accueil - CPM CANADA</title>
        <meta
          name="description"
          content="Traversez-vous des épreuves difficiles? Si oui, vous n'êtes pas seul. Faites le premier pas vers le chemin du bien-être en parlant à un professionnel qui vous aidera à regagner le contrôle et ..."
        />
      </Head>
      <DynamicHeroSection isMobile={isMobile} />
      <Carousel />
      <IntroText />
      <Services />
      <WhyUs />
      <TherapieIndividuelle />
      <TherapieCouple />
      <TherapieFamille />
      <PsychoEducation />
      <HowToGetStarted />
      <Benefits />
      <GetStarted />
      <MoreInfoSection isMobile={isMobile} />
      <Footer />
      {scrollPosition > 600 && <DynamicMobileActions />}
    </>
  );
};


export default HomePage;

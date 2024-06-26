"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Carousel from "@/componentsEn/Carousel/Carousel";
import MoreInfoSection from "@/componentsEn/Contents/Home/MoreInfo";
import Footer from "@/componentsEn/Footer/Footer";
import Services from "@/componentsEn/Contents/Home/Services";
// import IntroText from "@/componentsEn/Contents/Home/IntroText";
import WhyUs, {
  IndividualTherapy,
  PsychoEducation,
  CoupleTherapy,
  FamilyTherapy,
} from "@/componentsEn/Contents/Home/WhyUs";
import HowToGetStarted from "@/componentsEn/Contents/Home/HowToGetStarted";
import Benefits from "@/componentsEn/Contents/Home/Benefits";
import GetStarted from "@/componentsEn/Contents/Home/GetStarted";
import HomePage from "@/componentsEn/Contents/Home/HomePage";
import { useRouter } from "next/router";

// Dynamic imports for components that might cause hydration issues
const DynamicHeroSection = dynamic(
  () => import("@/componentsEn/HeroSection/Hero"),
  { ssr: false }
);
const DynamicMobileActions = dynamic(
  () => import("@/componentsEn/MobileActions/MobileActions"),
  { ssr: false }
);

const EnglishHomePage = () => {
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
    <div>
      <Head>
        <html lang="en" />
        <title>Home - CPM CANADA</title>
        <meta
          name="description"
          content="Are you going through hard times? If so, you are not alone. Take the first step towards well-being by talking to a professional who will help you regain control and ..."
        />
      </Head>
      <DynamicHeroSection isMobile={isMobile} />
      <Carousel />
      <HomePage />
      <Services />
      <WhyUs />
      <IndividualTherapy />
      <CoupleTherapy />
      <FamilyTherapy />
      <PsychoEducation />
      <HowToGetStarted />
      <Benefits />
      <GetStarted />
      <MoreInfoSection isMobile={isMobile} />
      <Footer />
      {scrollPosition > 600 && <DynamicMobileActions />}
    </div>
  );
};



export default EnglishHomePage;

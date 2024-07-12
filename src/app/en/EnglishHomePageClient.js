"use client";

import React, { useState, useEffect } from "react";

const EnglishHomePageClient = ({
  DynamicHeroSection,
  DynamicMobileActions,
  Carousel,
  HomePage,
  Services,
  WhyUs,
  IndividualTherapy,
  CoupleTherapy,
  FamilyTherapy,
  PsychoEducation,
  HowToGetStarted,
  Benefits,
  GetStarted,
  MoreInfoSection,
  Footer,
}) => {
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
    </>
  );
};

export default EnglishHomePageClient;

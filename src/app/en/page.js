import React from "react";
import dynamic from "next/dynamic";
import Carousel from "@/componentsEn/Carousel/Carousel";
import MoreInfoSection from "@/componentsEn/Contents/Home/MoreInfo";
import Footer from "@/componentsEn/Footer/Footer";
import Services from "@/componentsEn/Contents/Home/Services";
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
import EnglishHomePageClient from "./EnglishHomePageClient";

const DynamicHeroSection = dynamic(
  () => import("@/componentsEn/HeroSection/Hero"),
  { ssr: false }
);
const DynamicMobileActions = dynamic(
  () => import("@/componentsEn/MobileActions/MobileActions"),
  { ssr: false }
);

export default function EnglishHomePage() {
  return <EnglishHomePageClient 
    DynamicHeroSection={DynamicHeroSection}
    DynamicMobileActions={DynamicMobileActions}
    Carousel={Carousel}
    HomePage={HomePage}
    Services={Services}
    WhyUs={WhyUs}
    IndividualTherapy={IndividualTherapy}
    CoupleTherapy={CoupleTherapy}
    FamilyTherapy={FamilyTherapy}
    PsychoEducation={PsychoEducation}
    HowToGetStarted={HowToGetStarted}
    Benefits={Benefits}
    GetStarted={GetStarted}
    MoreInfoSection={MoreInfoSection}
    Footer={Footer}
  />;
}

export const metadata = {
  title: "Home - CPM CANADA",
  description: "Are you going through hard times? If so, you are not alone. Take the first step towards well-being by talking to a professional who will help you regain control and ...",
};
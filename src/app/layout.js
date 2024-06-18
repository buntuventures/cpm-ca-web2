"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router"; // Utilisez next/router
import Header from "@/components/Header/Header";
import HeaderEnglish from "@/componentsEn/Header/HeaderEnglish";

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gDeviceWidth, setGDeviceWidth] = useState(1440);

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setIsLoading(false);

    const updateDeviceState = () => {
      if (window.innerWidth >= 768) {
        setIsMobile(false);
        setMobileMenu(false);
        setGDeviceWidth(window.innerWidth);
      } else {
        setIsMobile(true);
        setGDeviceWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", updateDeviceState);

    return () => {
      window.removeEventListener("resize", updateDeviceState);
    };
  }, []);

  const headerStyles = {
    boxShadow: "2px 0 0px 0 rgba(184, 183, 183, 0.5)",
    // backgroundColor:"gray",
  };

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/images/cpm-favicon.png" />
      </Head>
      <header style={headerStyles}>
        {pathname && pathname.startsWith("/en") ? (
          <HeaderEnglish
            isMobile={isMobile}
            mobileMenu={mobileMenu}
            isLoading={isLoading}
            gDeviceWidth={gDeviceWidth}
            toggleMobileMenu={() => setMobileMenu(!mobileMenu)}
            closeMobileMenu={() => setMobileMenu(false)}
          />
        ) : (
          <Header
            isMobile={isMobile}
            mobileMenu={mobileMenu}
            isLoading={isLoading}
            gDeviceWidth={gDeviceWidth}
            toggleMobileMenu={() => setMobileMenu(!mobileMenu)}
            closeMobileMenu={() => setMobileMenu(false)}
          />
        )}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

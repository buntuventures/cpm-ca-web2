"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import HeaderEnglish from "@/componentsEn/Header/HeaderEnglish";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [gDeviceWidth, setGDeviceWidth] = useState(1440);

  const pathname = usePathname();

  useEffect(() => {
    const updateDeviceState = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setMobileMenu(false);
      setGDeviceWidth(width);
      setIsLoading(false);
    };

    updateDeviceState();
    window.addEventListener("resize", updateDeviceState);

    // Facebook Pixel
    const facebookPixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
    if (facebookPixelId) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", facebookPixelId);
      fbq("track", "PageView");
    }

    return () => window.removeEventListener("resize", updateDeviceState);
  }, []);

  const headerStyles = {
    boxShadow: "2px 0 0px 0 rgba(184, 183, 183, 0.5)",
  };

  return (
    <html lang={pathname.startsWith("/en") ? "en" : "fr"}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body>
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=UA-121097236-1`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-121097236-1');
              gtag('config', 'AW-997202270');
              gtag('config', 'AW-997202270/qnv-CIfCnoQBEN6ywNsD', {
                'phone_conversion_number': '613-252-5227'
              });
            `,
          }}
        />
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
      </body>
    </html>
  );
}

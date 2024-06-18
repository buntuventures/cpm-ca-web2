import React from "react";
import Image from "next/image";
// import ImageMobile from "/images/mozaique-mobile.png";
// import ImageDesktop from "/images/mozaique.png";

const Mozaique = ({ isMobile, windowWidth, children }) => (
  <div
    style={{
      backgroundImage: `url(${
        windowWidth < 842 ? "/images/mozaique-mobile.png" : "/images/mozaique.png"
      })`,
      boxShadow: "inset 0 0 0 10000px rgba(0,0,0,.65)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {children}
  </div>
);

export default Mozaique;

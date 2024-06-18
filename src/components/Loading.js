import React from "react";
import Image from "next/image";
import LoadingIcon from "/images/loading-icon.gif";

const Loading = ({ size }) => (
  <div style={{ maxWidth: size }}>
    <Image src={LoadingIcon} width={24} height={24} alt="Loading Icon" style={{ width: "100%" }} />
  </div>
);

export default Loading;

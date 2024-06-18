import React from "react";
import Image from "next/image";
import LoadingIcon from "../images/loading-icon.gif";

const Loading = ({ size }) => (
  <div style={{ maxWidth: size }}>
    <Image src={LoadingIcon} alt="Loading Icon"width={24} height={24} style={{ width: "100%" }} />
  </div>
);

Loading.displayName = "Loading";
export default Loading;

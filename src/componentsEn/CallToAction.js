import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";
import { useRouter } from "next/router";

const CallToAction = ({ type }) => {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path);
  };

  if (type === "call") {
    return <button>Call to Book an Appointment</button>;
  }
  return (
    <Button
      color="primary"
      text="Book Online"
      clicked={() =>
        navigateTo({
          pathname: "/en/booking",
          query: { item: "navigation" },
        })
      }
    />
  );
};

CallToAction.propTypes = {
  type: PropTypes.string,
};

CallToAction.displayName = "CallToAction";
export default CallToAction;

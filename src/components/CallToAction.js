import React from "react";
import PropTypes from "prop-types";
import Button from "./Button/Button";
import { useRouter } from "next/router";

const CallToAction = ({ type }) => {
  const router = useRouter();

  if (type === "call") {
    return <button>Appelez pour Réserver</button>;
  }

  return (
    <Button
      color="primary"
      text="Réserver en ligne"
      clicked={() =>
        router.push({
          pathname: "/reservation",
          query: { item: "navigation" },
        })
      }
    />
  );
};

CallToAction.propTypes = {
  type: PropTypes.string,
};

export default CallToAction;

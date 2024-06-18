import React from "react";

const WarningSection = ({ clicked }) => (
  <div style={{ backgroundColor: "#F6F6F6" }}>
    <div
      style={{
        maxWidth: 700,
        padding: "40px 20px",
        margin: "auto",
        minHeight: 400,
      }}
    >
      <div>
        <p>
          Si vous êtes en situation de crise ou une personne est en danger,
          n&apos;utilisez pas ce site. Ces ressources peuvent vous fournir une
          aide immédiate.
        </p>
        <button onClick={clicked}>Cliquez ici pour plus d&apos;informations</button>
      </div>
    </div>
  </div>
);

export default WarningSection;
